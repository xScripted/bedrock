<script lang="ts">
  interface IMenuItem {
    href: string
    title: string
    dropdown?: IMenuItem[]
  }

  const items: IMenuItem[] = [
    {
      href: '/',
      title: 'Element 1',
      dropdown: [
        {
          href: '/',
          title: 'Sub Element 1',
        },
        {
          href: '/',
          title: 'Sub Element 2',
        },
        {
          href: '/',
          title: 'Sub Element 3',
        },
      ],
    },
    {
      href: '/',
      title: 'Element 2',
    },
    {
      href: '/',
      title: 'Element 3',
      dropdown: [
        {
          href: '/',
          title: 'Sub Element 1-3',
        },
        {
          href: '/',
          title: 'Sub Element 2-3',
        },
        {
          href: '/',
          title: 'Sub Element 3-3',
        },
      ],
    },
  ]
</script>

<style lang="scss">
  @import '../../../sass/mixins.scss';
  .menu {
    background-color: var(--colorBackground);
    border-bottom: 1px solid var(--colorBorder);
    height: 80px;

    .g-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        display: flex;
        align-items: center;
      }

      .items {
        display: flex;

        .item-group {
          padding: 27px;

          &:hover .dropdown {
            display: flex;
          }

          .item {
            color: var(--colorText);

            &:hover {
              color: var(--colorBrand);
            }
          }

          .dropdown {
            display: none;
            position: absolute;
            overflow: hidden;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
            padding: 20px;
            background-color: var(--colorBackground);
            border: 1px solid var(--colorBorder);
            border-radius: var(--radius);
          }
        }
      }
    }
  }
</style>

<div class="menu">
  <div class="g-wrapper">
    <a href="/" class="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Logo" height="40px" />
    </a>

    <div class="items">
      {#each items as item}
        <div class="item-group">
          <a class="item" href={item.href} title={item.title}>{item.title}</a>

          {#if item.dropdown}
            <div class="dropdown">
              {#each item.dropdown as subItem}
                <a class="item" href={subItem.href} title={subItem.title}>{subItem.title}</a>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
