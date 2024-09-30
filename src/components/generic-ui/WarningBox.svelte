<script lang="ts">
  export let type: 'warning' | 'error' | 'info' | 'help' | 'tick' = 'info'
  //import Svg from '@/modules/shared/components/Svg.svelte'
  import Svg from '../essentials/Svg.svelte'
</script>

<style lang="scss">
  .warning-box {
    border-radius: var(--radius);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.1);

    &.warning {
      background-color: rgba(255, 255, 0, 0.1);
    }

    &.error {
      background-color: rgba(255, 0, 0, 0.1);
    }

    &.tick {
      background-color: rgba(0, 255, 0, 0.1);
    }

    &.info,
    &.help {
      background-color: rgba(68, 161, 156, 0.1);
    }

    p {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
</style>

<div class="warning-box {type}">
  <Svg name={type} width="50" height="50" fill="rgba(0, 0, 0, 0.2)" />
  <p>
    <slot />
  </p>
</div>
