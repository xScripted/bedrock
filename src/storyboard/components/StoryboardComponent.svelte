<script lang="ts">
  export let name: string = ''
  export let importName: string = ''

  const copyToClipboard = () => {
    navigator.clipboard.writeText(importName)
  }
</script>

<style lang="scss">
  .component {
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
    }
  }
</style>

<div class="component c-{name.split('.svelte')[0]}">
  <div class="header">
    <div class="name">{name}</div>
    <button class="importName" on:click={copyToClipboard}>{importName}</button>
  </div>

  <slot />
</div>
