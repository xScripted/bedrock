<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

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

  const currentDate: Date = new Date()
  const currentDay: number = currentDate.getDate()
  const currentMonth: number = currentDate.getMonth()
  const currentYear: number = currentDate.getFullYear()

  let month: number = currentMonth
  let year: number = currentYear

  let firstDayMonth: Date = new Date(year, month)
  let firstWeekDayMonth: number = firstDayMonth.getDay() === 0 ? 7 : firstDayMonth.getDay()
  //let daysInMonth: number = new Date(year, month + 1, 0).getDate()

  let firstArrayDay: Date = new Date(year, month, firstDayMonth.getDate() - firstWeekDayMonth)
  let monthArray: Date[] = []

  for (let x = 0; x < 42; x++) {
    monthArray.push(new Date(firstArrayDay.setDate(firstArrayDay.getDate() + 1)))
  }

  const nextMonth = () => {
    if (month == 11) {
      month = 0
      year++

      return
    }

    month++

    monthArray = []

    firstDayMonth = new Date(year, month)
    firstWeekDayMonth = firstDayMonth.getDay() === 0 ? 7 : firstDayMonth.getDay()
    firstArrayDay = new Date(year, month, firstDayMonth.getDate() - firstWeekDayMonth)

    for (let x = 0; x < 42; x++) {
      monthArray.push(new Date(firstArrayDay.setDate(firstArrayDay.getDate() + 1)))
    }
  }

  const pastMonth = () => {
    if (month == 0) {
      month = 11
      year--

      return
    }

    month--

    monthArray = []

    firstDayMonth = new Date(year, month)
    firstWeekDayMonth = firstDayMonth.getDay() === 0 ? 7 : firstDayMonth.getDay()
    firstArrayDay = new Date(year, month, firstDayMonth.getDate() - firstWeekDayMonth)

    for (let x = 0; x < 42; x++) {
      monthArray.push(new Date(firstArrayDay.setDate(firstArrayDay.getDate() + 1)))
    }
  }
</script>

<style lang="scss">
  .calendar {
    border: 1px solid var(--colorBorder);
    border-radius: 16px;
    background-color: var(--colorBase);

    height: fit-content;
    width: fit-content;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .date {
        background-color: var(--colorBorder);
        padding: 5px 15px;
        border-radius: 8px;
        height: 34px;
        width: 166px;

        display: flex;
        justify-content: center;
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

        .days.notMonth {
          color: var(--colorBase);
        }
      }
    }
  }
</style>

<div class="calendar">
  <div class="info">
    <button class="past" style="transform: rotate(90deg)" on:click={pastMonth}><Svg name="arrow" /></button>
    <div class="date">{months[month]} {year}</div>
    <button class="next" style="transform: rotate(-90deg)" on:click={nextMonth}><Svg name="arrow" /></button>
  </div>

  <div class="grid">
    {#each monthArray as date}
      <div class="section">
        <div class:dot={date.getDate() == currentDay && month == currentMonth && year == currentYear} />
        <div class="days" class:notMonth={date.getMonth() != month}>{date.getDate()}</div>
      </div>
    {/each}
  </div>
</div>
