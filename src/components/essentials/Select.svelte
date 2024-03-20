<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  interface IOptions {
    main: string
    sub: string[]
  }

  export let options: string[] /*| IOptions[]*/ = []
  export let name: string = ''
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

      .option,
      .delete {
        width: 100%;

        display: flex;
        justify-content: left;

        padding: 5px 10px;
        color: var(--colorBrand);
        cursor: pointer;

        &:hover {
          background-color: var(--colorBrand);
          color: var(--colorBase);
        }
      }

      .delete {
        border-top: 1px solid var(--colorBrand);
        margin-top: 10px;
        font-size: 13px;
        opacity: 0.5;

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
    <Svg {name} fill="var(--colorBrand)" height="20" width="20" />
    <span>{chosen}</span>
    <button class="arrow" on:click={() => (open = !open)}>
      <Svg name="arrow" fill="var(--colorBrand)" />
    </button>
  </div>
  <div class="options">
    {#if isSimple}
      {#each options as option, i}
        <button class="option" on:click={() => (chosen = option)}>{option}</button>
      {/each}
    {/if}
    <button class="delete" on:click={() => (chosen = 'Select')}>Delete selection</button>
  </div>
</div>
