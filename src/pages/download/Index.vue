<template>
  <q-page padding>
    <q-tabs v-model="currentTab">
      <q-tab :key="i" :label="`station ${i}`" :name="i" v-for="i in 6"/>
    </q-tabs>
    <div class="q-pa-md"/>
    <q-tab-panels class="q-card" style="min-height: 500px" v-model="currentTab">
      <q-tab-panel :key="i" :name="i" v-for="i in 6">
        <div>Informacion referente a estacion {{i}}</div>
        <pre style="font-family: 'Raleway Medium', sans-serif">
          nombre: estacion {{i}}
          version: 0.0.1
          capacidad: 4GB
          espacio ocupado: 300Mb
          porciento ocupado: {{300/4000*100}}%
        </pre>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    // name: 'PageName'
    setup() {
      const currentTab = ref(1)
      return {
        currentTab
      }
    }
  })
</script>
