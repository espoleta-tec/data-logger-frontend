<template>
  <div class="text-black q-pa-md full-width">
    {{data}}
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
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const chartOptions: ApexOptions = {
        chart: {
          type: 'area'

        },
        xaxis: {
          type: 'datetime',
          labels: {
            datetimeUTC: false
          }
        }

      }

      const series: ApexAxisChartSeries = [
        {
          name: 'series-1',
          data: props.data.map((reading: { date: string, reading: number }) => ({
            x: reading.date,
            y: reading.reading
          })),
          color: palette('blue-7')
        }
      ]

      return {
        chartOptions, series
      }
    }
  })
</script>

