<template>
  <div class="text-white q-pa-md">
    <slot name="title"></slot>
    <apexchart :options="chartOptions" :series="series" height="100%" width="100%"/>
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
          type: 'area'

        },
        xaxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Aprl', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
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

