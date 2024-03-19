<script lang="ts">
  import Themes from '@/storyboard/components/Themes.svelte'
  import StoryboardDropdown from '@/storyboard/components/StoryboardDropdown.svelte'

  /*⭐ Essentials*/
  import Input from '@/components/essentials/Input.svelte'
</script>

<style lang="scss">
  .storyboard {
    display: flex;

    h1 {
      font-weight: bold;
    }

    h3 {
      font-size: 18px;
      text-align: center;
      color: var(--colorText2);
    }

    .container {
      padding: 10px 50px;
      width: 100%;
    }
  }
</style>

<div class="storyboard">
  <Themes />
  <div class="container">
    <h1 class="g-title center">STORYBOARD</h1>

    <StoryboardDropdown title="⭐ Essentials">
      <h3>Inputs</h3>

      <Input label="Label" />
    </StoryboardDropdown>

    <StoryboardDropdown title="🧩 Generic UI">
      <h3>Inputs</h3>
    </StoryboardDropdown>

    <StoryboardDropdown title="🧪 Miscellaneous">
      <h3>Inputs</h3>
    </StoryboardDropdown>

    <StoryboardDropdown title="🪄 Animations">
      <h3>Inputs</h3>
    </StoryboardDropdown>

    <StoryboardDropdown title="📌 Tasks">
      <h3>Laia: Marcar de alguna forma el tema activo</h3>
      <h3>Laia: Al darle otra vez que se quite el tema</h3>
      <h3>Laia: Background dinamico</h3>
      <h3>Miquel: Vigilar a Laia</h3>
    </StoryboardDropdown>
  </div>
</div>
