<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  export let profilePicture: string = ''

  interface ILink {
    title: string
    href: string
  }

  let links: ILink[] = [
    { title: 'Ninfomanía', href: '' },
    { title: 'Osteopatía', href: '' },
    { title: 'Esclerosis', href: '' },
  ]

  let options: ILink[] = [
    { title: 'Honolulu', href: '' },
    { title: 'Honolulu', href: '' },
    { title: 'Honolulu', href: '' },
  ]
</script>

<style lang="scss">
  .menu {
    width: 100%;
    height: 80px;
    padding: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--colorBase);

    .left {
      width: fit-content;
      display: flex;
      gap: 20px;

      .link {
        padding: 5px 10px;
        border-radius: 8px;
        transition: 0.3s ease;

        &:hover {
          transition: 0.3s ease;
          box-shadow:
            3px 3px 10px var(--colorBackground),
            -3px -3px 10px var(--colorBase2);
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 20px;

      .profilePicture {
        height: 50px;
        width: 50px;
        border-radius: 50px;
        position: relative;

        box-shadow:
          3px 3px 10px var(--colorBackground),
          -3px -3px 10px var(--colorBase2);

        img {
          height: 100%;
        }

        .account {
          position: absolute;
          width: fit-content;
          height: fit-content;
          min-width: 130px;
          padding: 10px 15px;

          background-color: var(--colorBase2);
          border-radius: 8px;

          top: 65px;
          right: 0px;
          display: none;

          .options {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            margin-right: 5px;
            text-align: end;
          }

          .divisor {
            width: 100%;
            height: 1px;
            background-color: var(--colorBorder);
            margin: 5px 0;
          }

          .signOut {
            font-size: 13px;
          }
        }

        &:hover {
          .account {
            display: block;
          }
        }
      }

      .notifications {
        transition: 0.3s ease;

        height: 40px;
        width: 40px;
        padding: 5px;
        border-radius: 8px;

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
  <div class="left">
    {#each links as link}
      <a href={link.href} class="link">{link.title}</a>
    {/each}
  </div>

  <div class="right">
    <button class="notifications">
      <Svg name="bellOff" height="30" width="30" />
    </button>
    <button class="profilePicture">
      <img src={profilePicture} alt="" />
      <div class="account">
        <div class="options">
          {#each options as option}
            <a href={option.href} class="option">{option.title}</a>
          {/each}
        </div>
        <div class="divisor" />
        <button class="signOut">Cerrar sesión</button>
      </div>
    </button>
  </div>
</div>
