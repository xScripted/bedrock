<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  import Checkbox from '@/components/essentials/Checkbox.svelte'
  import { onMount } from 'svelte'

  onMount(() => document.body.setAttribute('theme', 'Bedrock'))

  let activeTheme: string = 'Bedrock'

  const themes = [
    {
      name: 'Bedrock',
      info: 'Una representación  gráfica de la fragilidad de las cosas bonitas.',
      open: false,
    },
    {
      name: 'Glassmorphism',
      info: 'Una representación  gráfica de la fragilidad de las cosas bonitas.',
      open: false,
    },
    {
      name: 'Neumorphism',
      info: 'sfusgdhdasdasdafsd',
      open: false,
    },
    {
      name: 'Y2K',
      info: 'sfusgdhdasdasdafsd',
      open: false,
    },
    {
      name: 'Royal',
      info: 'sfusgdhdasdasdafsd',
      open: false,
    },
    {
      name: 'Neon',
      info: 'sfusgdhdasdasdafsd',
      open: false,
    },
  ]
</script>

<style lang="scss">
  .menu {
    position: sticky;
    top: 0;
    width: 350px;
    height: 100vh;

    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    background-color: var(--colorBase);
    box-shadow: 5px 0px 10px 0px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 25px;
    }

    .themes {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .theme {
        :global(svg) {
          transition: 0.3s ease;
          transform: rotate(90deg);
          opacity: 0.5;
        }

        &.open {
          :global(svg) {
            transform: rotate(0deg);
            opacity: 1;
          }
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;

          .name {
            font-size: 18px;
            display: flex;
            align-items: center;
            gap: 15px;
            width: 100%;

            .on {
              height: 10px;
              width: 10px;
              background-color: var(--colorBrand);
              border-radius: 50%;
              opacity: 0;

              &.active {
                opacity: 1;
              }
            }
          }

          .more {
            display: flex;
            align-items: center;
          }
        }

        .info {
          height: fit-content;
          width: 100%;
          display: none;

          border-left: 1px solid rgba(0, 0, 0, 0.2);
          padding: 10px;
          margin-top: 5px;
          margin-left: 5px;
          font-size: 15px;

          opacity: 0.6;
          &.open {
            display: flex;
          }
        }
      }
    }
  }
</style>

<div class="menu">
  <h2>🎨 Themes</h2>
  <div class="themes">
    {#each themes as theme}
      <div class="theme" class:open={theme.open}>
        <div class="header">
          <button
            class="name"
            on:click={() => {
              document.body.setAttribute('theme', (activeTheme = activeTheme === theme.name ? '' : theme.name))
            }}
          >
            <div class="on" class:active={activeTheme === theme.name} />
            {theme.name}
          </button>
          <button class="more" on:click={() => (theme.open = !theme.open)}>
            <Svg name="arrow" width="20" height="20" />
          </button>
        </div>
        <span class="info" class:open={theme.open}>{theme.info}</span>
      </div>
    {/each}
  </div>
</div>
