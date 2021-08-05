<template>
  <q-card class="bg-dark text-white flex flex-center">
    Graph
  </q-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts'
  import * as graphOpts from 'components/common/graphOptions'

  export default defineComponent({
    // name: 'ComponentName'
    components: {
      VueApexCharts
    },
    setup() {
      return {
        ...graphOpts
      }
    }
  })
</script>
