<script lang="ts">
  export let label: string = 'Click me'

  const color: string[] = ['#62CDFF', '#FF788A', '#907EFF', '#C1FF72']
  let bgColor: string = ''

  const random = () => {
    let chosen: number = Math.floor(Math.random() * color.length)
    return color[chosen]
  }

  const changeColor = () => {
    bgColor = random()
  }
</script>

<style lang="scss">
  .button-container {
    width: fit-content;
    height: fit-content;
    padding: 5px 10px;
    margin: 5px;

    border-top: 3px solid var(--dark);
    border-left: 3px solid var(--dark);
    border-radius: 8px;

    font-weight: 600;

    box-shadow: 3px 3px 0px 3px var(--dark);
    transition: background-color 0.3s ease;

    &:active {
      box-shadow: none;
      border: 3px solid var(--dark);
      transform: translateX(3px) translateY(3px);
      margin-bottom: 2px;
    }
  }
</style>

<button
  class="button-container"
  on:mouseenter={changeColor}
  on:mouseleave={() => (bgColor = '')}
  style="background-color: {bgColor}"
  on:click={changeColor}
>
  <div class="label">{label}</div>
</button>
