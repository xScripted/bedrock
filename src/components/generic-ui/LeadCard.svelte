<script lang="ts">
  interface ILead {
    name: string
    email: string
    phone: string
    message: string
  }

  const leads: ILead[] = [
    {
      name: 'Miquel Toran Suriña',
      email: 'miquel97bdn@gmail.com',
      phone: '+34679216099',
      message: 'Quiero comprar este piso si me rebajas 6000€',
    },
    {
      name: 'Tecnocansa',
      email: 'tecnocansa@tecnocasposos.com',
      phone: '666 666 666',
      message: 'Os voy a quemar la oficina',
    },
    {
      name: 'ElRubius',
      email: 'rubius@criaturita.com',
      phone: '654 541 931',
      message: 'aaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAA',
    },
  ]

  console.log(leads)
</script>

<style lang="scss">
  .card-container {
    height: fit-content;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 20px;

    .lead-card {
      width: 100%;
      height: fit-content;
      padding: 15px 20px;

      border: 1px solid var(--colorBrand);
      border-radius: 16px;

      display: flex;
      align-items: center;

      .contact {
        min-width: 300px;

        .content {
          color: var(--colorBrandLight);
          font-size: 13px;
        }
      }
    }
  }
</style>

<div class="card-container">
  {#each leads as lead}
    <div class="lead-card">
      <div class="contact">
        <div class="name">{lead.name}</div>
        <div class="content">{lead.email}</div>
        <div class="content">{lead.phone}</div>
      </div>

      <div class="message">{lead.message}</div>
    </div>
  {/each}
</div>
