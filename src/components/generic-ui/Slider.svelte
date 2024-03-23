<script lang="ts">
  import { onMount } from 'svelte'
  export let nItems: number = 1

  let HTMLSliderContainer: HTMLElement
  let sliderWidth: number

  onMount(() => {
    console.log(sliderWidth)
  })
</script>

<style lang="scss">
  .slider {
    border: 1px solid yellow;
    //overflow: hidden;

    :global(.slider-container > *) {
      width: 100%;
    }

    padding: 0;

    .slider-container {
      border: 1px solid red;
      display: flex;

      width: 5850px;
    }
  }
</style>

<div class="slider g-wrapper" bind:offsetWidth={sliderWidth}>
  <div class="slider-container" bind:this={HTMLSliderContainer}>
    <slot />
  </div>
</div>
