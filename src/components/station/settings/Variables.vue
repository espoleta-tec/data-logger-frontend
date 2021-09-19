<template>
  <div class="q-pa-md row">
    <div class="col-12 col-md-6 q-pa-md">
      <div>
        Leer sensores cada
        <q-slider :min="15" :step="15" :max="15*4*24" markers v-model="current.Settings.generalReadDelay"/>
        {{minToHumanReadableFormat(current.Settings.generalReadDelay)}}
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <div>
        Leer sensor de precipitación cada
        <q-slider :min="15" :step="15" :max="15*4*24" markers v-model="current.Settings.precipitationReadDelay"/>
        {{minToHumanReadableFormat(current.Settings.precipitationReadDelay)}}
      </div>
    </div>
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
      const current = useCurrentStation()


      return {
        minToHumanReadableFormat, MIN_TO_MONTH, readInterval, current
      }
    }
  })
</script>
