<template>
  <div class="q-pa-md row">
    <div class="col-12 col-md-6 q-pa-md">
      <div>
        Precipitation Reading Interval
        <q-slider :min="1" v-model="precipitationReadingInterval"/>
        {{minToHumanReadableFormat(actualReadInterval(precipitationReadingInterval))}}
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <div>
        Sensor Reading Interval
        <q-slider :min="1" v-model="readInterval"/>
        {{minToHumanReadableFormat(actualReadInterval(readInterval))}}
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-md"></div>
    <div class="col-12 col-md-6 q-pa-md"></div>
    <div class="col-12 col-md-6 q-pa-md"></div>
    <div class="col-12 col-md-6 q-pa-md"></div>
    <div class="col-12 col-md-6 q-pa-md"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { minToHumanReadableFormat } from 'src/utils/formatting.utils'
  import { MIN_TO_MONTH } from 'src/utils/constants'

  export default defineComponent({
    name: 'variables',
    setup() {
      const precipitationReadingInterval = ref(1)
      const readInterval = ref(1)
      const actualReadInterval = (val: number) => {
        return val * 5
      }

      return {
        minToHumanReadableFormat, MIN_TO_MONTH, actualReadInterval, readInterval, precipitationReadingInterval
      }
    }
  })
</script>
