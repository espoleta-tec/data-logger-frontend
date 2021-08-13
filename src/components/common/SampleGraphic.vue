<template>
  <q-card class="bg-dark text-white q-pa-md">
    <slot name="title"></slot>
  </q-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import * as graphOpts from 'components/common/graphOptions'
  import { colors } from 'quasar'

  let palette = colors.getPaletteColor

  export default defineComponent({
    // name: 'ComponentName'
    components: {},
    setup() {
      return {
        ...graphOpts
      }
    },
    computed: {
      options() {
        return {
          legend: {
            labels: {
              colors: [palette('white')]
            },
            markers: {
              fillColors: [palette('green-12'), palette('accent')]
            }
          },
          chart: {
            // stacked: true,
            height: 350,
            type: 'area',
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: [palette('green-12'), palette('accent')]
          },
          fill: {
            colors: [palette('green-12'), palette('accent')],
            type: 'gradient',
            gradient: {
              shade: 'dark',
              shadeIntensity: 0.5,
              opacityFrom: 0.8,
              opacityTo: 0.2,
              stops: [0, 90, 100]
            }
          },
          grid: {
            borderColor: 'white',
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: false
              }
            }
          }
        }
      }
    }
  })
</script>
