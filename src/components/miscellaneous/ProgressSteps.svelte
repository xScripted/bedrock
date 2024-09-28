<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  //export let currentStep: number = 1

  export let steps = []
</script>

<style lang="scss">
  .progress-steps {
    position: relative;
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .step {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 50px;

      .title {
        position: absolute;
        color: var(--colorText);
        opacity: 0.5;
        font-size: 13px;
        max-width: 115px;
        text-align: center;

        bottom: 0;
      }

      .icon {
        display: flex;
        align-items: center;
        border-radius: 100%;
        padding: 10px;
      }

      &.done .icon {
        border: 2px solid var(--colorBrand);
      }

      &.current .icon {
        border: 2px solid var(--colorBrand);
        transform: scale(1.5);
      }
    }

    .line {
      height: 2px;
      width: 75px;
      background-color: var(--colorBrand);
    }
  }
</style>

<div class="progress-steps">
  {#each steps as step}
    <div class="line" />
    <div class="step" class:done={step.done} class:current={true}>
      <div class="icon">
        <Svg name={step.done ? 'tick' : step.icon} width="30" height="30" fill="var(--colorBrand)" />
      </div>
      <div class="title">{step.title}</div>
    </div>
  {/each}
</div>
