<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  const weekdays: string[] = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

  const currentDate: Date = new Date()
  const currentDay: number = currentDate.getDate()
  const currentMonth: number = currentDate.getMonth()
  const currentYear: number = currentDate.getFullYear()

  let monthDate = new Date()
  let monthArray: Date[] = []

  const refreshMonth = () => {
    monthArray = []

    const firstDayMonth: Date = new Date(monthDate.getFullYear(), monthDate.getMonth())
    const firstWeekDayMonth: number = firstDayMonth.getDay() === 0 ? 7 : firstDayMonth.getDay()
    const firstArrayDay: Date = new Date(monthDate.getFullYear(), monthDate.getMonth(), firstDayMonth.getDate() - firstWeekDayMonth)

    for (let x = 0; x < 42; x++) {
      monthArray.push(new Date(firstArrayDay.setDate(firstArrayDay.getDate() + 1)))
    }
  }

  const nextMonth = () => {
    monthDate = new Date(monthDate.setMonth(monthDate.getMonth() + 1))
    refreshMonth()
  }

  const pastMonth = () => {
    monthDate = new Date(monthDate.setMonth(monthDate.getMonth() - 1))
    refreshMonth()
  }

  refreshMonth()
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
    gap: 25px;

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
        text-transform: capitalize;
      }
    }

    .table {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      .week {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        font-size: 13px;
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
  }
</style>

<div class="calendar">
  <div class="info">
    <button class="past" style="transform: rotate(90deg)" on:click={pastMonth}><Svg name="arrow" /></button>
    <div class="date">{new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(monthDate)} {monthDate.getFullYear()}</div>
    <button class="next" style="transform: rotate(-90deg)" on:click={nextMonth}><Svg name="arrow" /></button>
  </div>

  <div class="table">
    <div class="week">
      {#each weekdays as weekday}
        <span>{weekday}</span>
      {/each}
    </div>

    <div class="grid">
      {#each monthArray as date}
        <div class="section">
          <div class:dot={date.getDate() == currentDay && monthDate.getMonth() == currentMonth && monthDate.getFullYear() == currentYear} />
          <div class="days" class:notMonth={date.getMonth() != monthDate.getMonth()}>{date.getDate()}</div>
        </div>
      {/each}
    </div>
  </div>
</div>
