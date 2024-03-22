<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  export let company: string = 'Company name'

  const socials = [
    {
      name: 'twitter',
      url: 'url',
    },
    {
      name: 'whatsapp',
      url: 'url',
    },
    {
      name: 'instagram',
      url: 'url',
    },
  ]
</script>

<style lang="scss">
  .footer {
    width: 100%;

    background-color: var(--colorBackground);
    height: 250px;
  }
</style>

<div class="footer">
  <div class="logo"></div>
  <div class="social">
    {#each socials as social}
      <a href={social.url}>
        <Svg name={social.name} />
      </a>
    {/each}
  </div>
  <div class="details"></div>
  <div class="legal-section">
    <div>© {new Date().getFullYear()} {company}</div>
    <a href="/politica-de-privacidad/" title="Política de Privacidad"> Política de Privacidad </a>
    <a href="/politica-de-cookies/" title="Política de Cookies">Política de Cookies</a>
  </div>
  <div class="extra"></div>
</div>
