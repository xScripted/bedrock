<script lang="ts">
  interface IQuestions {
    question: string
    answer: string
  }

  let isClosed: boolean = false

  let xs: IQuestions[] = [
    {
      question: 'pregunta1',
      answer: 'respuesta1',
    },
    {
      question: 'pregunta2',
      answer: 'respuesta2',
    },
    {
      question: 'pregunta3',
      answer: 'respuesta3',
    },
  ]
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
  {#each xs as x}
    <div class="pack">
      <button
        class="question"
        on:click={() => {
          isClosed = !isClosed
        }}>{x.question}</button
      >
      {#if isClosed}
        <span class="answer">{x.answer}</span>
      {/if}
    </div>
  {/each}
</div>
