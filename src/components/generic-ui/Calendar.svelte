<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  let currentDate = new Date()
  let currentDay: number = currentDate.getDate()
  let currentMonth: number = currentDate.getMonth()
  let currentYear: number = currentDate.getFullYear()

  let months: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]

  //pasado diciembre que empiece un nuevo año -> antes de enero que retroceda a diciembre del año anterior
  //que salgan los dias anteriores y posteriores para acabas las 42 casillas
  //que cambien los dias al cambiar de mes
  const nextMonth = () => {
    currentMonth = currentMonth + 1
  }

  const pastMonth = () => {
    currentMonth = currentMonth - 1
  }

  let firstDay: number = new Date(currentYear, currentMonth).getDay()
  firstDay = firstDay === 0 ? 7 : firstDay

  const daysInMonth: number = new Date(currentYear, currentMonth + 1, 0).getDate()

  /*const getLastDayMonth = (): number => {
    const tempDate = new Date()
    const initialMonth: number = tempDate.getMonth()
    let tempMonth: number = tempDate.getMonth()

    while (initialMonth === tempMonth) {
      tempDate.setDate(tempDate.getDate() + 1)
      tempMonth = tempDate.getMonth()
    }

    tempDate.setDate(tempDate.getDate() - 1)
    return tempDate.getDate()
  }*/
</script>

<style lang="scss">
  .calendar {
    border: 1px solid var(--colorBorder);
    border-radius: 16px;
    background-color: var(--colorBase);

    height: fit-content;
    width: fit-content;
    padding: 20px 25px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    .info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .date {
        background-color: var(--colorBorder);
        padding: 5px 15px;
        border-radius: 8px;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      height: 350px;

      .section {
        width: 50px;
        height: 50px;
        position: relative;

        background-color: var(--colorBorder);
        border-radius: 8px;
        margin: 5px;
        padding: 3px 8px;

        display: flex;
        align-items: end;
        justify-content: end;

        .dot {
          height: 10px;
          width: 10px;
          position: absolute;
          top: 5px;
          left: 5px;

          background-color: var(--colorBase);
          border-radius: 100%;
        }
      }
    }
  }
</style>

<div class="calendar">
  <div class="info">
    <button class="past" style="transform: rotate(90deg)" on:click={pastMonth}><Svg name="arrow" /></button>
    <div class="date">{months[currentMonth]} {currentYear}</div>
    <button class="next" style="transform: rotate(-90deg)" on:click={nextMonth}><Svg name="arrow" /></button>
  </div>

  <div class="grid">
    {#each new Array(42) as section, i}
      <div class="section">
        {#if i + 1 - firstDay + 1 > 0}
          {#if i + 1 - firstDay + 1 <= daysInMonth}
            <div class:dot={i + 1 - firstDay + 1 == currentDay} />

            <div class="days">
              {i + 1 - firstDay + 1}
            </div>
          {/if}
        {/if}
      </div>
    {/each}
  </div>
</div>
