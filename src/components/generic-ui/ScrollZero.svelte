<script lang="ts">

import Button from '@/componentes/essentials/Button.svelte'

const scrollTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}
</script>

<Button click="scrollTop">
  <Svg name="arrow" />
</Button>
