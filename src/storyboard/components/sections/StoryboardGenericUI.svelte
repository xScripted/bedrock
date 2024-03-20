<script lang="ts">
  import Dropdown from '@/storyboard/components/StoryboardDropdown.svelte'
  import Component from '@/storyboard/components/StoryboardComponent.svelte'
  import Button from '@/components/essentials/Button.svelte'

  /*🧩 Generic UI*/
  import Card from '@/components/generic-ui/cards/Card2.svelte'
  import Modal from '@/components/generic-ui/Modal.svelte'
  import Map from '@/components/generic-ui/Map.svelte'
  import Opinions from '@/components/generic-ui/Opinions.svelte'
  import Pagination from '@/components/generic-ui/Pagination.svelte'
  import Faqs from '@/components/generic-ui/Faqs.svelte'
  import FaqsCategory from '@/components/generic-ui/FaqsCategory.svelte'
  import Gallery from '@/components/generic-ui/Gallery.svelte'

  let modal: boolean = false
</script>

<style lang="scss">
  .slot-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
</style>

<Dropdown title="🧩 Generic UI">
  <div class="auto-columns wide">
    <Component name="Card.svelte" importName="import Card from '@/components/generic-ui/cards/Card.svelte'">
      <div class="slot-cards">
        <Card icon="twitter" title="Comprar un inmueble" subtitle="Encuentra tu nuevo hogar con nosotros" />
      </div>
    </Component>

    <Component name="Modal.svelte" importName="import Modal from '@/components/generic-ui/Modal.svelte'">
      <Modal bind:open={modal} padding="20px">
        <div slot="modal-header">
          <h2>Example modal title</h2>
        </div>

        Modal content! - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eius illum quisquam inventore corrupti libero
        nostrum, quibusdam repellat odio, quidem porro magnam nemo at incidunt vero excepturi maxime cumque fuga!
      </Modal>
      <Button click={() => (modal = !modal)}>Open modal</Button>
    </Component>

    <Component name="Map.svelte" importName="import Map from '@/components/generic-ui/Map.svelte'">
      <Map lat={41.390205} long={2.154007} zoom={11} />
    </Component>

    <Component name="Opinions.svelte" importName="import Opinions from '@/components/generic-ui/Opinions.svelte'">Opinions</Component>

    <Component name="Pagination.svelte" importName="import Pagination from '@/components/generic-ui/Pagination.svelte'">
      <Pagination currentPage={2} totalPages={20} />
    </Component>

    <Component name="Faqs.svelte" importName="import Faqs from '@/components/generic-ui/Faqs.svelte'">Faqs</Component>

    <Component name="FaqsCategory.svelte" importName="import FaqsCategory from '@/components/generic-ui/FaqsCategory.svelte'"
      >FaqsCategory</Component
    >

    <Component name="Gallery.svelte" importName="import Gallery from '@/components/generic-ui/Gallery.svelte'">Gallery</Component>
  </div>
</Dropdown>
