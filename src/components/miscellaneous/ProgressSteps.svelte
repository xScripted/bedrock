<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  import { onMount } from 'svelte'

  interface IStep {
    icon: string
    title: string
  }

  export let steps: IStep[] = []
  export let currentStep: number = 3
  currentStep--

  let HTMLProgressSteps: HTMLElement

  //animation-delay = 0 --> (+1.5) * doneSteps
  //for(let i ; i == doneSteps ; i++) {animation-delay = animation-delay + 1.5} seguir investigando attr()

  onMount(() => {
    const steps = [...HTMLProgressSteps.children]

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < currentStep) step.classList.add('completed')
        if (index === currentStep) step.classList.add('current')
      }, 1000 * index)
    })
  })
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

    .step-container {
      display: flex;
      align-items: center;

      &.completed {
        .step {
          :global(.svg-icon) {
            opacity: 0;
          }

          :global(.svg-tick) {
            opacity: 1;
          }
        }

        .line {
          .animation-color {
            width: 100%;
          }
        }
      }

      &.current {
        .step {
          :global(.svg-icon) {
            border: 1px solid var(--colorBrand);
            transform: scale(1.5);
            opacity: 1;
          }
          .title {
            opacity: 1;
            bottom: -10px;
          }
        }

        .line {
          .animation-color {
            width: 100%;
          }
        }
      }

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
          transition: 0.5s ease 1s;
        }
        :global(svg) {
          transition: 0.5s ease 1s;

          display: flex;
          align-items: center;
          border-radius: 100%;
          padding: 10px;
          opacity: 0.5;
          background-color: var(--colorBase);
        }

        :global(.svg-tick) {
          position: absolute;
          background-color: var(--colorBrand);
          opacity: 0;
        }
      }
      .line {
        position: relative;
        height: 2px;
        width: 75px;
        border-radius: 50px;

        .bg {
          position: absolute;
          background-color: var(--colorBrand);
          width: 100%;
          height: 100%;
          opacity: 0.5;
        }

        .animation-color {
          position: absolute;
          background-color: var(--colorBrand);
          width: 0%;
          height: 100%;
          transition: 1s ease;
        }
      }

      &:nth-child(1) .line {
        .bg,
        .animation-color {
          background: linear-gradient(to right, rgba(68, 161, 156, 0), var(--colorBrand));
        }
      }
    }
  }
</style>

<div class="progress-steps" bind:this={HTMLProgressSteps}>
  {#each steps as step, i}
    <div class="step-container">
      <div class="line">
        <div class="animation-color" />
        <div class="bg" />
      </div>
      <div class="step">
        <Svg name="tick" width="50" height="50" className="svg-tick" />
        <Svg name={step.icon} width="50" height="50" fill="var(--colorBrand)" className="svg-icon" />

        <div class="title">{step.title}</div>
      </div>
    </div>
  {/each}
</div>
