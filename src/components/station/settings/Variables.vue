<template>
  <div class="q-pa-md row">
    <div class="col-12 col-md-6 q-pa-md">
      <div>
        Precipitation Reading Interval
        <q-slider :min="1" v-model="current.Settings.precipitationReadDelay"/>
        {{minToHumanReadableFormat(actualReadInterval(current.Settings.precipitationReadDelay))}}
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <div>
        Sensor Reading Interval
        <q-slider :min="1" v-model="current.Settings.generalReadDelay"/>
        {{minToHumanReadableFormat(actualReadInterval(current.Settings.generalReadDelay))}}
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
  import { useCurrentStation } from 'src/utils/storeInterface/use-current-station'

  export default defineComponent({
    name: 'variables',
    setup() {
      const readInterval = ref(1)
      const actualReadInterval = (val: number) => {
        return val * 5
      }

      return {
        minToHumanReadableFormat, MIN_TO_MONTH, actualReadInterval, readInterval, current: useCurrentStation()
      }
    }
  })
</script>
