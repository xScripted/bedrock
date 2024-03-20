<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  interface IOptions {
    main: string
    sub: string[]
  }

  export let options: string[] | IOptions[] = []
  let open: boolean = false
  let chosen: string = 'Select'

  const isSimple: boolean = typeof options[0] === 'string'
</script>

<style lang="scss">
  .select {
    width: fit-content;
    height: 37px;
    overflow: hidden;
    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
    gap: 10px;

    &.open {
      height: fit-content;
      transition: 0.3s ease;

      .arrow {
        transform: rotate(0deg) !important;
        transition: 0.3s ease;
      }
    }

    .unfold {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;

      padding: 5px 10px;
      padding-right: 3px;
      border-radius: 6px;
      border: 1px solid var(--colorBrand);

      span {
        height: 100%;
        color: var(--colorBrand);
      }

      .arrow {
        display: flex;
        align-items: center;
        transform: rotate(90deg);
        transition: 0.3s ease;
      }
    }

    .options {
      display: flex;
      flex-direction: column;

      border-radius: 6px;
      border: 1px solid var(--colorBrand);
      overflow: hidden;

      .option {
        width: 100%;

        padding: 5px 10px;
        color: var(--colorBrand);
        cursor: pointer;

        &:hover {
          background-color: var(--colorBrand);
          color: var(--colorBase);
        }
      }
    }
  }
</style>

<div class="select" class:open>
  <div class="unfold">
    <span>{chosen}</span>
    <button class="arrow" on:click={() => (open = !open)}>
      <Svg name="arrow" fill="var(--colorBrand)" />
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
