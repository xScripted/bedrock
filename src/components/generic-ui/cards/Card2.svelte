<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  export let icon: string
  export let title: string
  export let subtitle: string = ''
  export let link: string = '/servicios'
</script>

<style lang="scss">
  .service-card {
    transition: 0.3s ease;
    position: relative;
    border-radius: var(--radius);
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
    background-color: var(--colorBase);
    padding: 20px;
    width: 100%;
    min-height: 250px;
    height: 100%;
    overflow: hidden;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transition: 0.3s ease;
      transform: scale(0.9);

      :global(.arrow) {
        fill: var(--colorBrand);
        opacity: 1;
      }
    }

    .title {
      font-size: 16px;
      text-align: left;
      width: 100%;
      margin-bottom: 10px;
    }

    .subtitle {
      font-size: 14px;
      padding-right: 30px;
      text-wrap: balance;
      color: var(--colorText2);
    }

    :global(.main-icon) {
      align-self: center;
      margin-top: 10px;
    }

    :global(.arrow) {
      transition: 0.3s ease;
      position: absolute;
      right: 20px;
      bottom: 20px;
      transform: rotate(-90deg);
      fill: var(--colorText2);
      opacity: 0.3;
    }
  }
</style>

<a href={link} {title} class="service-card">
  <Svg name={icon} className="main-icon" width="70" height="70" fill="var(--colorBrand)" />

  <div>
    <h2 class="title">{@html title}</h2>
    <h3 class="subtitle">{@html subtitle}</h3>
  </div>

  <Svg name="arrow" className="arrow" width="30" height="30" />
</a>
