<script lang="ts">
  import { onMount } from 'svelte'
  export let showedItems: number = 2

  let HTMLSliderContainer: HTMLElement
  let sliderWidth: number

  onMount(() => {
    const nItems = HTMLSliderContainer.children.length
    HTMLSliderContainer.style.width = (sliderWidth * nItems) / showedItems + 'px'
  })
</script>

<style lang="scss">
  .slider {
    overflow: hidden;
    padding: 0;

    :global(.slider-container > *) {
      width: 100%;
    }

    .slider-container {
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
