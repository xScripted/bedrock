<script lang="ts">
  import { onMount } from 'svelte'
  import Svg from '@/components/essentials/Svg.svelte'

  export let itemWidth: number = 300

  let HTMLslides: HTMLElement

  onMount(() => {
    const nItems = HTMLslides.children.length
    HTMLslides.style.width = `${nItems * itemWidth}px`
  })
</script>

<style lang="scss">
  @import '../../sass/mixins.scss';

  .slider-x {
    height: fit-content;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .arrows {
      display: flex;
      gap: 10px;

      .arrow {
        border: 1px solid var(--colorBorder);
        border-radius: 100%;
        width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        &.left {
          transform: rotate(90deg);
        }

        &.right {
          transform: rotate(-90deg);
        }
      }
    }

    .slides {
      display: flex;
    }
  }
</style>

<div class="slider-x">
  <div class="g-wrapper">
    <div class="arrows">
      <button class="arrow left">
        <Svg name="arrow" width="40" height="40" />
      </button>

      <button class="arrow right">
        <Svg name="arrow" width="40" height="40" />
      </button>
    </div>
    <div class="slides" bind:this={HTMLslides}>
      <slot />
    </div>
  </div>
</div>
