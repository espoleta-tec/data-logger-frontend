<template>
  <q-page padding>
    <q-tabs active-bg-color="primary" active-color="white" v-model="currentTab">
      <q-tab :key="station" :label="`${station.hostname}`" :name="station.id"
             v-for="station in $store.state.station.connectedStations"/>
    </q-tabs>
    <div class="q-pa-md"/>
    <q-tab-panels class="q-card" style="min-height: 500px" v-model="currentTab">
      <q-tab-panel :key="station" :name="station.id" class="column absolute-full"
                   v-for="station in $store.state.station.connectedStations">
        <section>
          <div>Informacion referente a estacion {{station.hostname}}</div>
          <pre style="font-family: 'Raleway Medium', sans-serif">
          nombre: {{station.hostname}}
          version: 0.0.1
          capacidad: 4GB
          espacio ocupado: 300Mb
          porciento ocupado: {{300/4000*100}}%
        </pre>
        </section>
        <q-space/>
        <section class="text-right q-gutter-md">
          <q-btn color="negative" label="Borrar datos"/>
          <q-btn color="secondary" label="Descargar datos"/>
        </section>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useStore } from 'src/store'

  export default defineComponent({
    // name: 'PageName'
    setup() {
      const store = useStore()
      const currentTab = ref(store.state.station.connectedStations?.[0]?.id || 0)
      return {
        currentTab
      }
    }
  })
</script>
