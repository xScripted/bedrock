<script lang="ts">
  import Dropdown from '@/storyboard/components/StoryboardDropdown.svelte'
  import Component from '@/storyboard/components/StoryboardComponent.svelte'

  /*🧪 Miscellaneous*/
  import AccordionGallery from '@/components/miscellaneous/AccordionGallery.svelte'
  import PaperPages from '@/components/miscellaneous/PaperPages.svelte'
  import Clock from '@/components/miscellaneous/Clock.svelte'

  export const accordionGalleryItems = [
    {
      src: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg',
      alt: 'League of Legends',
      link: 'https://www.leagueoflegends.com/es-es/champions/malzahar/',
      title: 'Malzahar',
      text: 'Malzahar, un fanático mago vidente dedicado a la unión de toda vida, está convencido de que el nuevo y emergente Vacío es el camino hacia la salvación de Runaterra. En pleno desierto de Shurima siguió las voces que susurraban en su mente hasta llegar a la antigua Icathia.',
    },
    {
      src: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg',
      alt: 'League of Legends',
      link: 'https://www.leagueoflegends.com/es-es/champions/katarina/',
      title: 'Katarina',
      text: 'Con un juicio decisivo y letal en el combate, Katarina es una de las mejores asesinas noxianas. Al ser la primogénita del legendario general Du Couteau, ha dado a conocer sus habilidades con asesinatos rápidos contra enemigos inconscientes.',
    },
    {
      src: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
      alt: 'League of Legends',
      link: 'https://www.leagueoflegends.com/es-es/champions/annie/',
      title: 'Annie',
      text: 'Peligrosa pero encantadoramente precoz, Annie es una pequeña maga con un inmenso poder piromántico. Incluso en los parajes montañosos al norte de Noxus es una hechicera sin precedentes',
    },
    {
      src: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg',
      alt: 'League of Legends',
      link: 'https://www.leagueoflegends.com/es-es/champions/syndra/',
      title: 'Syndra',
      text: 'Syndra es una temible maga jonia con un poder increíble a su disposición. De niña, inquietó a los ancianos del lugar con su imprudente y tempestuosa magia',
    },
    {
      src: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg',
      alt: 'League of Legends',
      link: 'https://www.leagueoflegends.com/es-es/champions/orianna/',
      title: 'Orianna',
      text: 'Orianna, antaño una chica curiosa de carne y hueso, es ahora una maravilla tecnológica compuesta exclusivamente de engranajes.',
    },
  ]
</script>

<Dropdown title="🧪 Miscellaneous">
  <Component
    name="Clock.svelte"
    importName="import Clock from '@/components/miscellaneous/Clock.svelte'"
    attributes={{ done: true, responsive: false, expand: true }}
  >
    <Clock />
  </Component>

  <Component
    name="AccordionGallery.svelte"
    importName="import AccordionGallery from '@/components/miscellaneous/AccordionGallery.svelte'"
    attributes={{ done: true, responsive: false, expand: true }}
  >
    <AccordionGallery items={accordionGalleryItems} />
  </Component>

  <Component
    name="PaperPages.svelte"
    importName="import PaperPages from '@/components/miscellaneous/PaperPages.svelte'"
    attributes={{ done: true, responsive: false, expand: true }}
  >
    <PaperPages>
      <span class="page-wrapper" style="--y:0.5; --x: 0; --z: 0deg">
        <section class="problems-section g-wrapper">Content A</section>
      </span>
      <span class="page-wrapper" style="--y:0.6; --x: 0; --z: 2deg">
        <section class="problems-section g-wrapper">Content B</section>
      </span>
      <span class="page-wrapper" style="--y:0.7; --x: 0; --z: -2deg">
        <section class="problems-section g-wrapper">Content C</section>
      </span>
    </PaperPages>
  </Component>
</Dropdown>
