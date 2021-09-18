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
          <q-btn color="negative" label="Borrar datos" @click="formatData(station)"/>
          <q-btn :disabled="!enableDownload" color="secondary" label="Descargar datos" @click="downloadData(station)"/>
        </section>
      </q-tab-panel>
    </q-tab-panels>
    <format-sd :station="currentStation" v-model="showFormat"/>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useStore } from 'src/store'
  import { Station } from 'src/types/station'
  import axios from 'axios'
  import { api } from 'boot/axios'
  import FormatSd from 'components/common/dialogs/FormatSd.vue'
  import { useQuasar } from 'quasar'

  export default defineComponent({
    // name: 'PageName'
    components: {
      FormatSd
    },
    setup() {
      const store = useStore()
      const currentTab = ref(store.state.station.connectedStations?.[0]?.id || 0)
      const enableDownload = ref(true)
      const currentStation = ref({})
      const showFormat = ref(false)
      const q = useQuasar()

      async function downloadData(station: Station) {
        enableDownload.value = false
        const { data } = await axios.get<string>(`http://${station.currentUrl}/logs`)
          .catch(() => {
            q.notify({
              message: 'Error al descargar registros',
              color: 'negative'
            })
            return {data: null}
          })
        enableDownload.value = true
        if (!data) return

        const obj = data.split('\r\n').map((rawReading: string) => {
          const sbj: Record<string, string | number> = {}
          rawReading.split(';').map((innerRead: string) => {
            let [key, value]: (string | number)[] = innerRead.split('=')
            if (key === undefined || value === undefined) return
            if (!isNaN(parseFloat(value))) {
              value = parseFloat(value)
            } else {
              value = value.replace(/["\\]+/g, '')
            }
            sbj[key] = value
          })
          sbj.StationId = station.id
          return sbj
        }).filter(sbj => Object.keys(sbj).length > 1 && sbj.date)
        await api.post('/reading', obj)
          .then(() => {
            q.notify({
              message: 'Registros descargados',
              color: 'positive'
            })
          })
          .catch(() => {
            q.notify({
              message: 'Error al descargar registros',
              color: 'negative'
            })
            return
          })
      }

      function formatData(station: Station) {
        currentStation.value = station
        showFormat.value = true
      }

      return {
        currentTab, downloadData, enableDownload, currentStation, showFormat, formatData
      }
    }
  })
</script>
