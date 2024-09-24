<script lang="ts">
  const getLastDayMonth = (): number => {
    const tempDate = new Date()
    const initialMonth = tempDate.getMonth()
    let tempMonth = tempDate.getMonth()

    while (initialMonth === tempMonth) {
      tempDate.setDate(tempDate.getDate() + 1)
      tempMonth = tempDate.getMonth()
    }

    tempDate.setDate(tempDate.getDate() - 1)
    return tempDate.getDate()
  }
</script>

<style lang="scss">
  .calendar {
    background-color: lightblue;
    border-radius: 16px;

    height: 350px;
    width: 100%;
    max-width: 400px;
    padding: 20px 25px;
    display: flex;
    align-items: center;
  }
</style>

<div class="calendar">
   {#each new Array(42) as section}
</div>
