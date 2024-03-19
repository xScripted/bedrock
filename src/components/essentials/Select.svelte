<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  interface IOptions {
    main: string
    sub: string[]
  }

  export let options: string[] | IOptions[] = []

  const isSimple: boolean = typeof options[0] === 'string'
</script>

<style lang="scss">
  .select {
    width: fit-content;
    height: fit-content;

    border: 1px solid var(--colorText3);
    border-radius: 6px;

    .unfold {
      display: flex;
      align-items: center;
      gap: 15px;

      padding: 5px 10px;
      padding-right: 3px;

      span {
        height: 100%;
      }

      .arrow {
        display: flex;
        align-items: center;
      }
    }
  }
</style>

<div class="select">
  <div class="unfold">
    <span>Elegido</span>
    <button class="arrow">
      <Svg name="arrow" />
    </button>
  </div>
  {#if isSimple}
    <div class="options">
      {#each options as option}
        <div class="option">{option}</div>
      {/each}
    </div>
  {/if}
</div>
