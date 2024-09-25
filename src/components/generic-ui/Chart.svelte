<script lang="ts">
  import Chart from 'chart.js/auto'
  import { onMount } from 'svelte'

  let HTMLChart: HTMLCanvasElement

  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ]

  onMount(() => {
    new Chart(HTMLChart, {
      type: 'bar',
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map((row) => row.count),
          },
        ],
      },
      options: {
        animation: {
          duration: 6000, // Duración de la animación (en milisegundos)
          easing: 'easeOutBounce', // Tipo de transición (puedes probar otros como 'linear', 'easeInOutQuad', etc.)
          onProgress: function (animation) {
            // Función de callback para cada frame de la animación
          },
          onComplete: function (animation) {
            // Función de callback cuando termina la animación
          },
        },
      },
    })
  })
</script>

<style lang="scss">
</style>

<canvas id="chart" bind:this={HTMLChart}></canvas>
