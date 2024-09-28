<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  interface IStep {
    icon: string
    title: string
  }

  export let steps: IStep[] = []
  export let currentStep: number = 1
</script>

<style lang="scss">
  .progress-steps {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 45px;
    margin: 20px 0;

    .step {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      z-index: 1;

      .title {
        position: absolute;
        color: var(--colorBrand);
        font-size: 12px;
        max-width: 125px;
        text-align: center;
        opacity: 0.5;

        bottom: 0;
      }

      :global(svg) {
        display: flex;
        align-items: center;
        border-radius: 100%;
        padding: 10px;
        opacity: 0.5;

        background-color: var(--colorBase);
      }

      &.done {
        :global(svg) {
          border: 2px solid var(--colorBrand);
          background-color: var(--colorBrand);
          opacity: 1;
        }

        .title {
          opacity: 0.5;
        }
      }

      &.current {
        :global(svg) {
          border: 2px solid var(--colorBrand);
          transform: scale(1.5);
          opacity: 1;
        }

        .title {
          font-size: 13px;
          opacity: 1;
          bottom: -15px;
        }
      }
    }

    .line {
      height: 2.5px;
      width: 75px;
      background-color: var(--colorBrand);
      border-radius: 50px;

      &:nth-child(1) {
        background: linear-gradient(to right, rgba(68, 161, 156, 0), var(--colorBrand));
      }

      &.last {
        opacity: 0.5;
      }
    }
  }
</style>

<div class="progress-steps">
  {#each steps as step, i}
    <div class="line" class:last={i + 1 > currentStep} />
    <div class="step" class:done={i + 1 < currentStep} class:current={i + 1 === currentStep}>
      <Svg name={i + 1 < currentStep ? 'tick' : step.icon} width="50" height="50" fill="var(--colorBrand)" />

      <div class="title">{step.title}</div>
    </div>
  {/each}
</div>
