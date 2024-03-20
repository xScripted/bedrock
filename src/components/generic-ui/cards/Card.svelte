<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  export let title: string = ''
  export let subtitle: string = ''
  export let name: string = ''
</script>

<style lang="scss">
  .card {
    height: 250px;
    width: 250px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--colorBackground);
    border-radius: 10px;
    padding: 20px;

    transition: 0.2s ease;
    cursor: pointer;

    .icon {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -20px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .title {
        font-weight: 500;
        color: var(--colorText1);
      }

      .subtitle {
        height: fit-content;
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;

        span {
          color: var(--colorText2);
          font-size: 14px;
        }

        .arrow {
          transform: rotate(-90deg);
          margin-right: -10px;
        }
      }
    }

    &:hover {
      transform: scale(0.9);
      transition: 0.3s ease;
    }
  }
</style>

<div class="card">
  <div class="icon">
    <Svg {name} width="75" height="75" fill="var(--colorBrand)" />
  </div>
  <div class="content">
    <div class="title">{title}</div>
    <div class="subtitle">
      <span>{subtitle}</span>
      <div class="arrow">
        <Svg name="arrow" fill="var(--colorText2)" />
      </div>
    </div>
  </div>
</div>
