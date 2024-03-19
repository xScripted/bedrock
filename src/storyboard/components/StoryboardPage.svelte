<script lang="ts">
  import Themes from '@/storyboard/components/StoryboardThemes.svelte'
  import Dropdown from '@/storyboard/components/StoryboardDropdown.svelte'
  import Component from '@/storyboard/components/StoryboardComponent.svelte'

  /*⭐ Essentials*/
  import Input from '@/components/essentials/Input.svelte'
  import Checkbox from '@/components/essentials/Checkbox.svelte'
  import Button from '@/components/essentials/Button.svelte'
  import Range from '@/components/essentials/Range.svelte'
  import Select from '@/components/essentials/Select.svelte'
  import Menu from '@/components/essentials/menus/Menu.svelte'
  import Footer from '@/components/essentials/footers/Footer.svelte'
  import DarkMode from '@/components/essentials/DarkMode.svelte'
  import Svg from '@/components/essentials/Svg.svelte'

  /*🧩 Generic UI*/
  import Card from '@/components/generic-ui/cards/Card.svelte'
  import Modal from '@/components/generic-ui/Modal.svelte'
  import Map from '@/components/generic-ui/Map.svelte'
  import Opinions from '@/components/generic-ui/Opinions.svelte'
  import Pagination from '@/components/generic-ui/Pagination.svelte'
  import Faqs from '@/components/generic-ui/Faqs.svelte'
  import FaqsCategory from '@/components/generic-ui/FaqsCategory.svelte'
  import Gallery from '@/components/generic-ui/Gallery.svelte'

  /*🧪 Miscellaneous*/
  /*🪄 Animations*/

  /* -------------------------------------------*/
  const inputDataExamples = {
    text: '',
    number: null,
    currency: '',
    email: '',
    password: '',
    phone: '',
    textarea: '',
  }

  const checkboxDataExamples = {
    checkbox_A: false,
    checkbox_B: true,
    toggle_A: false,
    toggle_B: true,
  }
</script>

<style lang="scss">
  .storyboard {
    display: flex;

    h1 {
      font-weight: bold;
    }

    h3 {
      font-size: 20px;
      color: var(--colorText2);
      text-align: center;
      padding-bottom: 20px;
    }

    .container {
      padding: 10px 50px;
      width: 100%;

      .auto-columns {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 20px;
        padding: 20px 0;
      }

      :global(.c-Input) {
        grid-row: span 5;
      }

      .object-example {
        font-size: 10px;
        color: var(--colorText2);
        text-align: center;
        grid-column: span 2;
        opacity: 0.5;
      }

      /* Component slots*/
      .slot-inputs {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .slot-checkboxes {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 25px;
        justify-items: center;
        padding: 20px 0;
      }

      .slot-buttons,
      .slot-select,
      .slot-svgs {
        display: flex;
        justify-content: space-around;
        padding: 25px 0;
      }
    }
  }
</style>

<div class="storyboard">
  <Themes />

  <div class="container">
    <h1 class="g-title center">STORYBOARD</h1>

    <Dropdown title="⭐ Essentials">
      <h3>Form Inputs</h3>

      <div class="auto-columns">
        <Component name="Input.svelte" importName="import Input from '@/components/essentials/Input.svelte'">
          <div class="slot-inputs">
            <Input bind:value={inputDataExamples.text} label="Label" placeholder="Placeholder example, error=true" maxlength={10} error />
            <Input
              id="1"
              bind:value={inputDataExamples.number}
              type="number"
              label="Type number"
              placeholder="Only numbers"
              prefix="youtube"
              sufix="youtube"
              min={0}
              max={30}
              step="2"
              maxlength={5}
            />

            <Input
              id="2"
              bind:value={inputDataExamples.currency}
              type="currency"
              label="Type currency"
              placeholder="formatPrice 10.000 => 10000"
              prefix="twitter"
              sufix="€"
            />

            <Input
              id="3"
              bind:value={inputDataExamples.email}
              type="email"
              label="Type email"
              placeholder="example@test.com"
              prefix="email"
              sufix="€"
            />

            <Input id="4" bind:value={inputDataExamples.phone} type="tel" label="Type tel (phone)" prefix="phone" />
            <Input id="5" bind:value={inputDataExamples.password} type="password" label="Type password" />

            <Input id="6" bind:value={inputDataExamples.textarea} type="textarea" label="Type textarea" />
          </div>

          <p class="object-example">
            {JSON.stringify(inputDataExamples)}
          </p>
        </Component>

        <Component name="Checkbox.svelte" importName="import Checkbox from '@/components/essentials/Checkbox.svelte'">
          <div class="slot-checkboxes">
            <Checkbox bind:value={checkboxDataExamples.checkbox_A} />
            <Checkbox bind:value={checkboxDataExamples.toggle_A} toggle />
            <Checkbox bind:value={checkboxDataExamples.checkbox_B} />
            <Checkbox bind:value={checkboxDataExamples.toggle_B} toggle />
          </div>

          <p class="object-example">
            {JSON.stringify(checkboxDataExamples)}
          </p>
        </Component>
        <Component name="Button.svelte" importName="import Button from '@/components/essentials/Button.svelte'">
          <div class="slot-buttons">
            <Button type="main">
              <span>Main</span>
            </Button>
            <Button type="secondary">
              <span>Texto</span>
            </Button>
            <Button disabled>
              <span>Texto</span>
            </Button>
          </div>
        </Component>
        <Component name="Color.svelte" importName="import Color from '@/components/essentials/Color.svelte'">Color</Component>
        <Component name="DateTime.svelte" importName="import DateTime from '@/components/essentials/DateTime.svelte'">Date'n Time</Component
        >
        <Component name="Range.svelte" importName="import Range from '@/components/essentials/Range.svelte'">Range</Component>
        <Component name="Select.svelte" importName="import Select from '@/components/essentials/Select.svelte'">
          <div class="slot-select">
            <Select options={['Pikachu', 'Charmander', 'Squirtle']} />
            <Select
              options={[
                { main: 'Barcelona', sub: ['Centro', 'Gracia', 'Raval'] },
                { main: 'Ripollet', sub: ['Centro', 'Norte', 'Sur'] },
              ]}
            />
          </div>
        </Component>
      </div>

      <h3>Menus</h3>
      <div class="auto-columns">
        <Component name="Menu.svelte" importName="import Menu from '@/components/essentials/menus/Menu.svelte'">
          <Menu />
        </Component>
      </div>

      <h3>Footers</h3>
      <div class="auto-columns">
        <Component name="Footer.svelte" importName="import Menu from '@/components/essentials/footers/Footer.svelte'">
          <Footer />
        </Component>
      </div>

      <h3>Others</h3>
      <div class="auto-columns">
        <Component name="Darkmode.svelte" importName="import DarkMode from '@/components/essentials/DarkMode.svelte'">
          <DarkMode />
        </Component>
        <Component name="Svg.svelte" importName="import Svg from '@/components/essentials/Svg.svelte'">
          <div class="slot-svgs">
            <Svg name="twitter" />
            <Svg name="twitter" fill="var(--colorBrand)" width="50" height="50" />
            <Svg name="twitter" />
          </div>

          <a href="/private/svgs" class="object-example">Visitar /private/svgs</a>
        </Component>
      </div>
    </Dropdown>

    <Dropdown title="🧩 Generic UI">
      <div class="auto-columns">
        <Component name="Card.svelte" importName="import Card from '@/components/generic-ui/cards/Card.svelte'">Card</Component>
        <Component name="Modal.svelte" importName="import Modal from '@/components/generic-ui/Modal.svelte'">Modal</Component>
        <Component name="Map.svelte" importName="import Map from '@/components/generic-ui/Map.svelte'">Map</Component>
        <Component name="Opinions.svelte" importName="import Opinions from '@/components/generic-ui/Opinions.svelte'">Opinions</Component>
        <Component name="Pagination.svelte" importName="import Pagination from '@/components/generic-ui/Pagination.svelte'"
          >Pagination</Component
        >
        <Component name="Faqs.svelte" importName="import Faqs from '@/components/generic-ui/Faqs.svelte'">Faqs</Component>
        <Component name="FaqsCategory.svelte" importName="import FaqsCategory from '@/components/generic-ui/FaqsCategory.svelte'"
          >FaqsCategory</Component
        >
        <Component name="Gallery.svelte" importName="import Gallery from '@/components/generic-ui/Gallery.svelte'">Gallery</Component>
      </div>
    </Dropdown>

    <Dropdown title="🧪 Miscellaneous">
      <h3>Inputs</h3>
    </Dropdown>

    <Dropdown title="🪄 Animations">
      <h3>Inputs</h3>
    </Dropdown>

    <Dropdown title="📌 Tasks">
      <h3>Miquel: Vigilar a Laia</h3>
    </Dropdown>
  </div>
</div>
