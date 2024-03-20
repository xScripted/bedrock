<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  interface IOption {
    main: string
    sub: string[]
  }

  export let options: string[] | IOption[] = []

  let chosen: string = 'Select'
  let subChosen: string = ''
  let choices: IOption[] = []
  let isSimple = typeof options[0] === 'string'

  if (isSimple) {
    choices = options.map((option) => {
      return {
        main: option,
        sub: [],
      }
    })
  }
</script>

<style lang="scss">
  .select {
  }
</style>

<div class="select" class:isSimple>
  <div class="chosen">
    <span>{chosen}</span>
  </div>
  <div class="dropdown">
    {#each choices as choice}
      <button on:click={() => (chosen = choice.main)}>{choice.main}</button>
      {#each choice.sub as sub}
        <button on:click={() => (subChosen = sub)}>{sub}</button>
      {/each}
    {/each}
    <button class="delete" on:click={() => (chosen = 'Select')}>Delete selection</button>
  </div>
</div>
