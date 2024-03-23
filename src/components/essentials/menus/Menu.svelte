<script lang="ts">
  const items = [
    {
      href: '/',
      title: 'Element 1',
    },
    {
      href: '/',
      title: 'Element 2',
    },
    {
      href: '/',
      title: 'Element 3',
    },
  ]
</script>

<style lang="scss">
  @import '../../../sass/mixins.scss';
  .menu {
    border-bottom: 1px solid var(--colorBorder);
    padding: 15px;

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
        gap: 30px;

        .item {
          color: var(--colorText);

          &:hover {
            color: var(--colorBrand);
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
        <a class="item" href={item.href} title={item.title}>{item.title}</a>
      {/each}
    </div>
  </div>
</div>
