<script lang="ts">
  interface IAttributes {
    done?: boolean
    hydrate?: boolean
    experimental?: boolean
    bugs?: boolean
    responsive?: boolean
  }

  export let name: string = ''
  export let importName: string = ''
  export let attributes: IAttributes = {}

  const copyToClipboard = () => {
    navigator.clipboard.writeText(importName)
  }
</script>

<style lang="scss">
  .component {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 20px;
    background-color: var(--colorBase);

    .header {
      grid-column: span 2;

      text-align: center;

      .name {
        font-weight: bold;
        font-size: 20px;
        color: var(--colorText);
      }

      .importName {
        transition: 0.3s ease;
        cursor: pointer;
        opacity: 0.5;
        padding: 10px;
        font-size: 10px;
        color: var(--colorText2);

        &:hover {
          transition: 0.3s ease;
          opacity: 1;
        }
      }

      .attributes {
        position: absolute;
        display: flex;
        gap: 0px;
        right: 10px;
        top: 10px;
        cursor: default;
      }
    }
  }
</style>

<div class="component c-{name.split('.svelte')[0]}">
  <div class="header">
    <div class="name">{name}</div>
    <button class="importName" on:click={copyToClipboard}>{importName}</button>

    <div class="attributes">
      <div title={attributes.done ? 'Done!' : 'In progress'}>{attributes.done ? '✅' : '⚙️'}</div>

      {#if attributes.hydrate}
        <div title="Needs to hydrate client:load">💧</div>
      {/if}

      {#if attributes.bugs}
        <div title="Has bugs to repair">🪳</div>
      {/if}

      {#if attributes.responsive}
        <div title="Responsive tested & approved!">📱</div>
      {/if}
    </div>
  </div>

  <slot />
</div>
