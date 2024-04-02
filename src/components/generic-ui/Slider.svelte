<script lang="ts">
  import { onMount } from 'svelte'
  export let showedItems: number = 1

  let HTMLSlider: HTMLElement
  let sliderContainerWidth: number
  let nItems: number = 0
  let currentDot: number = 0

  const sliding = (index) => {
    HTMLSlider.style.transform = `translateX(-${sliderContainerWidth * index}px)`

    currentDot = index
  }

  onMount(() => {
    nItems = HTMLSlider.children.length
    HTMLSlider.style.width = (sliderContainerWidth * nItems) / showedItems + 'px'
  })
</script>

<style lang="scss">
  @import '../../sass/mixins.scss';

  .g-wrapper {
    border: 1px solid red;
    width: 100%;
    padding: 0;

    .slider-container {
      overflow: hidden;
      padding: 0;
      scroll-snap-type: x mandatory;

      @include notDesktop {
        overflow: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      .slider {
        transition: 0.8s ease;
        display: flex;
        width: 100%;
      }

      :global(.slider > *) {
        scroll-snap-align: center;
      }
    }
    .dots {
      display: flex;
      justify-content: center;
      padding: 20px;
      gap: 10px;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 15px;
        background-color: var(--colorBorder);
        transition: 0.3s;

        cursor: pointer;

        &.active {
          background-color: var(--colorBrand);
          width: 30px;
        }
      }
    }
  }
</style>

<div class="g-wrapper">
  <div class="slider-container" bind:offsetWidth={sliderContainerWidth}>
    <div class="slider" bind:this={HTMLSlider}>
      <slot />
    </div>
  </div>

  <div class="dots">
    {#each new Array(Math.ceil(nItems / showedItems)) as _, index}
      <button class="dot" class:active={currentDot === index} on:click={() => sliding(index)} />
    {/each}
  </div>
</div>
