<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  interface IOption {
    main: string
    children: string[]
  }

  interface IValue {
    main: string
    child?: string
  }

  export let placeholder: string = 'Select'
  export let options: string[] | IOption[] = []
  let choices: IOption[] = []
  let isSimple = typeof options[0] === 'string'
  let value: IValue = { main: '', child: '' }

  if (isSimple) {
    choices = options.map((option) => {
      return {
        main: option,
        children: [],
      }
    })
  } else {
    choices = options as IOption[]
  }

  const selectOption = (main: string, child: string = '') => {
    value = {
      main,
      child,
    }
  }
</script>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    gap: 5px;

    position: relative;

    .select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;

      border: 1px solid var(--colorBorder);
      border-radius: 5px;
      padding: 5px 10px;

      height: 55px;

      .value {
        display: flex;
        flex-direction: column;

        .child {
          font-size: 12px;
          text-align: left;
        }
      }
    }

    .dropdown {
      border-radius: 5px;
      border: 1px solid var(--colorBorder);
      padding: 10px;
      display: flex;
      flex-direction: column;

      //position: absolute;
      top: 0px;

      button {
        text-align: left;
      }
    }
  }
</style>

<div class="content" class:isSimple>
  <button class="select">
    <div class="value">
      {#if !value.main}
        <div>{placeholder}</div>
      {/if}
      <span class="main">{value.main}</span>
      <span class="child">{value.child}</span>
    </div>
    <Svg name="arrow" />
  </button>
  <div class="dropdown">
    {#each choices as choice}
      <button class="choice" on:click={() => selectOption(choice.main)}>{choice.main}</button>
      {#each choice.children as child}
        <button class="children" on:click={() => selectOption(choice.main, child)}>{child}</button>
      {/each}
    {/each}
    <button
      class="delete"
      on:click={() => {
        selectOption('', '')
      }}>Delete selection</button
    >
  </div>
</div>
