<template>
  <div class="row">
    <div class="col-12 col-md-6 q-pa-md">
      <q-input v-model="current.Settings.username" label="username"></q-input>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <q-input type="password" v-model="current.Settings.password" label="password"></q-input>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { minToHumanReadableFormat } from 'src/utils/formatting.utils'
  import { useCurrentStation } from 'src/utils/storeInterface/use-current-station'

  export default defineComponent({
    name: 'seguridad',
    setup() {
      return {
        maxInactiviy: ref(1), minToHumanReadableFormat,
        current: useCurrentStation()
      }
    }
  })
</script>
