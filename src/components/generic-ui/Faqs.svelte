<script lang="ts">
  //falta lo de los slots

  interface IQuestions {
    question: string
    answer: string
    active: boolean
  }

  let faqs: IQuestions[] = [
    {
      question: 'pregunta1',
      answer: 'respuesta1',
      active: false,
    },
    {
      question: 'pregunta2',
      answer: 'respuesta2',
      active: false,
    },
    {
      question: 'pregunta3',
      answer: 'respuesta3',
      active: false,
    },
  ]

  let activeIndex = null

  function handleClick(index: number) {
    if (activeIndex === index) {
      faqs[index].active = !faqs[index].active
    } else {
      if (activeIndex !== null) {
        faqs[activeIndex].active = false
      }
      faqs[index].active = true
      activeIndex = index
    }
  }
</script>

<style lang="scss">
  .faqs {
    height: fit-content;
    width: 100%;
    background-color: var(--colorBackground);
    border-radius: var(--radius);
    border: 1px solid var(--colorBorder);
    border-bottom: 0;

    .pack {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid var(--colorBorder);
      padding: 15px;

      .question {
        font-weight: bold;
        cursor: pointer;

        &:hover {
          color: var(--colorBrand);
        }
      }
    }
  }
</style>

<div class="faqs">
  {#each faqs as faq, index}
    <div class="pack">
      <button class="question" on:click={() => handleClick(index)}>
        {faq.question}
      </button>
      {#if faq.active}
        <span class="answer">{faq.answer}</span>
      {/if}
    </div>
  {/each}
</div>
