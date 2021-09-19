<template>
  <q-tab-panel v-bind="$attrs" class="column absolute-full">
    <section>
      <div>Informacion referente a estacion {{station.hostname}}</div>
      <pre style="font-family: 'Raleway Medium', sans-serif">
          nombre: {{station.hostname}}
          espacio ocupado: {{humanStorageSize(storage.used || 0)}}
          capacidad: {{humanStorageSize(storage.total || 0)}}
          porciento ocupado: {{Math.round(storage.used/storage.total*100)}}%
        </pre>
    </section>
    <q-space/>
    <section class="text-right q-gutter-md">
      <q-btn color="negative" label="Borrar datos" @click="formatData(station)"/>
      <q-btn :disabled="!enableDownload" color="secondary" label="Descargar datos" @click="downloadData(station)"/>
    </section>
  </q-tab-panel>
  <FormatSd :station="station" v-model="showFormat"/>
</template>

<script lang="ts">
  import { defineComponent, onBeforeMount, ref } from 'vue'
  import { Station } from 'src/types/station'
  import axios from 'axios'
  import { api } from 'boot/axios'
  import FormatSd from 'components/common/dialogs/FormatSd.vue'
  import { format, useQuasar } from 'quasar'

  const { humanStorageSize } = format

  export default defineComponent({
    // name: 'ComponentName'
    components: {
      FormatSd
    },
    props: {
      station: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const currentStation = ref({})
      const showFormat = ref(false)
      const enableDownload = ref(true)
      const q = useQuasar()
      const storage = ref({})

      onBeforeMount(async () => {
        const { data } = await axios.get(`http://${props.station.currentUrl}/storage`)
        console.log(data)
        storage.value = data
      })


      async function downloadData(station: Station) {
        enableDownload.value = false
        const { data } = await axios.get<string>(`http://${station.currentUrl}/logs`)
          .catch(() => {
            q.notify({
              message: 'Error al descargar registros',
              color: 'negative'
            })
            return { data: null }
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
        showFormat.value = true
      }

      return { formatData, enableDownload, showFormat, currentStation, downloadData, storage, humanStorageSize }
    }
  })
</script>
