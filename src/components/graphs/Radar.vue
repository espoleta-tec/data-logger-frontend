<template>
    <div class="text-black q-pa-md column">
        <div class="col-1">
        </div>
        <div class="col">
            <apexchart :options="chartOptions" :series="series"
                       height="100%" width="100%"/>
        </div>
        <div class="col-auto text-black row justify-evenly">
            <div class="col-12 col-sm-6 row flex-center">
                <div class="q-pr-sm">Desde:</div>
                <q-input type="date" v-model="minDate"/>
            </div>
            <div class="col-12 col-md-6 row flex-center">
                <div class="q-pr-sm">To:</div>
                <q-input type="date" v-model="maxDate"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
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
      const categoriesHeaders = ['norte', 'noreste', 'este', 'sureste', 'sur', 'suroeste', 'oeste', 'noroeste']
      const minDate = ref(0)
      const maxDate = ref(0)

      const categories = computed(() => {
        const categories: { [index: string]: number } = {}
        props.data
          .filter((r: { date: string, reading: string }) => {
            return new Date(r.date).getTime() > new Date(minDate.value).getTime()
          })
          .filter((r: { date: string, reading: string }) => {
            return new Date(r.date).getTime() < new Date().setDate(new Date(maxDate.value).getDate() + 1)
          })
          .map((r: { date: string, reading: string }) => {
            if (!categories[r.reading]) {
              categories[r.reading] = 1
            } else {
              categories[r.reading]++
            }
          })

        return categoriesHeaders.map(h => {
          return categories[h] || 0
        })
      })

      const chartOptions: ApexOptions = {
        chart: {
          type: 'radar'

        },
        xaxis: {
          categories: categoriesHeaders
        }

      }

      const series: ApexAxisChartSeries = [
        {
          name: 'series-1',
          data: categories as unknown as number[],
          color: palette('blue-7')
        }
      ]

      return {
        chartOptions, series, categories, minDate, maxDate
      }
    }
  })
</script>

