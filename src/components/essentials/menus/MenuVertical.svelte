<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  let panel: string = 'Admin'
  let logo: string = 'https://pbs.twimg.com/media/GKWHxTuW0AA5QPc?format=jpg&name=900x900'

  interface IMenuItem {
    item: string
    icon: string
    href: string
    subitem?: IMenuItem[]
  }

  let menuItems: IMenuItem[] = [
    { item: 'About us', icon: 'instagram', href: '' },
    { item: 'Privacy', icon: 'instagram', href: '' },
    { item: 'Imagination', icon: 'instagram', href: '' },
  ]
</script>

<style lang="scss">
  .menu {
    height: 100dvh;
    width: fit-content;
    min-width: 175px;
    background-color: var(--colorBase);
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 50px;

    .details {
      height: fit-content;
      width: 100%;
      display: flex;
      justify-content: space-around;

      .logo {
        height: 60px;
        width: 60px;
        border-radius: 50px;
        overflow: hidden;

        box-shadow:
          5px 5px 10px var(--colorBackground),
          -5px -5px 10px var(--colorBase2);

        img {
          height: 100%;
        }
      }

      .d-container {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .company {
          font-weight: 500;
        }

        .panel {
          font-size: 13px;
          font-weight: lighter;
        }
      }
    }

    .menuItems {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .menuItem {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
        border-radius: 8px;
        font-weight: 300;
        transition: 0.3s ease;

        &:hover {
          transition: 0.3s ease;
          box-shadow:
            3px 3px 10px var(--colorBackground),
            -3px -3px 10px var(--colorBase2);
        }
      }
    }
  }
</style>

<div class="menu">
  <div class="details">
    <div class="logo"><img src={logo} alt="" /></div>
    <div class="d-container">
      <span class="company">Tramita</span>
      <div class="panel">{panel}</div>
    </div>
  </div>

  <div class="menuItems">
    {#each menuItems as menuItem}
      <a class="menuItem" href={menuItem.href}>
        <Svg name={menuItem.icon} />
        <span>{menuItem.item}</span>
      </a>
    {/each}
  </div>
</div>
