<script lang="ts">
  import { onMount } from 'svelte'
  export let showedItems: number = 2

  let HTMLSliderContainer: HTMLElement
  let sliderWidth: number
  let nItems: number = 0

  onMount(() => {
    nItems = HTMLSliderContainer.children.length
    HTMLSliderContainer.style.width = (sliderWidth * nItems) / showedItems + 'px'
  })
</script>

<style lang="scss">
  .slider {
    border: 2px solid red;
    overflow: hidden;
    padding: 0;

    :global(.slider-container > *) {
      width: 100%;
    }

    .slider-container {
      display: flex;
      width: 5850px;
    }

    .dots {
      display: flex;
      gap: 10px;

      .dot {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: red;
      }
    }
  }
</style>

<div class="slider g-wrapper" bind:offsetWidth={sliderWidth}>
  <div class="slider-container" bind:this={HTMLSliderContainer}>
    <slot />
  </div>

  <div class="dots">
    {#each new Array(Math.round(nItems / showedItems)) as _}
      <div class="dot"></div>
    {/each}
  </div>
</div>
