<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  import { onMount } from 'svelte'

  interface IStep {
    icon: string
    title: string
  }

  export let steps: IStep[] = []
  export let currentStep: number = 3
  let animationStep = 1

  //animation-delay = 0 --> (+1.5) * doneSteps
  //for(let i ; i == doneSteps ; i++) {animation-delay = animation-delay + 1.5} seguir investigando attr()

  onMount(() => {
    document.querySelectorAll('.line .bg').forEach((HTMLbg: HTMLElement, index) => {
      let delayBG = index
      HTMLbg.style.animationDelay = `${delayBG}s`
    })

    setInterval(() => {
      if (animationStep < currentStep) {
        animationStep++
      }
    }, 1000)
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
      &.doneStep {
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
        background: linear-gradient(to right, rgba(68, 161, 156, 0), rgba(68, 161, 156, 0.5));
        .bg {
          animation: 1s progress;
          height: 100%;
          background: linear-gradient(to right, rgba(68, 161, 156, 0.2), var(--colorBrand));
          animation-timing-function: linear;
        }
      }
      &.doneLine {
        background-color: rgba(68, 161, 156, 0.5);
        .bg {
          animation-name: progress;
          animation-duration: 1s;
          height: 100%;
          width: 0%;
          background: var(--colorBrand);
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      }
      &.post {
        opacity: 0.5;
      }
    }
  }
  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
</style>

<div class="progress-steps">
  {#each steps as step, i}
    <div class="line" class:post={i + 1 > animationStep} class:doneLine={i + 1 <= animationStep && i + 1 != 1}>
      <div class="bg" />
    </div>
    <div class="step" class:doneStep={i + 1 < animationStep} class:current={i + 1 === animationStep}>
      <Svg name={i + 1 < animationStep ? 'tick' : step.icon} width="50" height="50" fill="var(--colorBrand)" />

      <div class="title">{step.title}</div>
    </div>
  {/each}
</div>
