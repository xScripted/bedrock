<script lang="ts">
  import BboButton from '../BboButton.svelte'

  let options: string[] = ['Inicio', 'Info', 'Precios', 'Contacto']
</script>

<style lang="scss">
  .menu-container {
    position: absolute;
    right: 0;

    height: fit-content;
    width: 150px;

    display: flex;
    flex-direction: column;
    align-items: end;

    padding: 15px;
    gap: 3px;
  }
</style>

<div class="menu-container">
  {#each options as option}
    <BboButton label={option} />
  {/each}
</div>
