<template>
  <div class="text-white q-pa-md column">
    <div class="col-1"></div>
    <div class="col">
      <apexchart :options="chartOptions" :series="series" height="100%" width="100%"/>
    </div>
    <div class="col-auto text-black row justify-evenly">
      <div class="col-12 col-sm-6 row flex-center">
        <div class="q-pr-sm">From:</div>
        <q-input type="date"/>
      </div>
      <div class="col-12 col-md-6 row flex-center">
        <div class="q-pr-sm">To:</div>
        <q-input type="date"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { colors } from 'quasar'
  import VueApexCharts from 'vue3-apexcharts'
  import ApexOptions = ApexCharts.ApexOptions

  let palette = colors.getPaletteColor

  export default defineComponent({
    // name: 'ComponentName'
    components: {
      apexchart: VueApexCharts
    },

    setup() {
      const chartOptions: ApexOptions = {
        chart: {
          type: 'radar'

        },
        xaxis: {
          categories: ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO']
        }

      }

      const series: ApexAxisChartSeries = [
        {
          name: 'series-1',
          data: [30, 40, 35, 50, 30, 80, 40, 40],
          color: palette('blue-7')
        }
      ]

      return {
        chartOptions, series
      }
    }
  })
</script>

