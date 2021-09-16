<template>
  <div class="q-pa-lg flex">
    <q-card class="col">
      <q-card-section class="bg-primary text-white text-h6">
        <span>{{station.hostname}}</span>
      </q-card-section>
      <q-card-section class="grid grid-cols-3 grid-gap-6">
        <q-btn :class="
        ['text-white grid-col-span-3',
        {'bg-accent': station.connectionStatus !== ConnectionStatusEnum.CONNECTED},
        {'bg-pink-7': station.connectionStatus === ConnectionStatusEnum.CONNECTED}]"
               @click="$store.dispatch('station/connectToStation', station)"
               :disabled="station.connectionStatus === ConnectionStatusEnum.CONNECTING">
          <div v-if="station.connectionStatus === ConnectionStatusEnum.CONNECTED">desconectar</div>
          <div v-if="station.connectionStatus === ConnectionStatusEnum.DISCONNECTED">conectar</div>
          <q-spinner-dots v-if="station.connectionStatus === ConnectionStatusEnum.CONNECTING"></q-spinner-dots>
        </q-btn>
        <q-btn v-if="station.connectionStatus === ConnectionStatusEnum.CONNECTED" icon="upload" color="primary"
               @click="uploadConfiguration">
          <q-tooltip>
            <div>Guardar configuracion actual</div>
          </q-tooltip>
        </q-btn>
        <q-btn @click="showDialog = true" icon="edit"/>
        <q-btn color="negative" icon="delete" @click="deleteStation"/>
      </q-card-section>
    </q-card>

    <settings v-model="showDialog" :key="showDialog"/>
    <save-config v-model="saveConfig" :station="station"/>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import Settings from 'components/station/Settings.vue'
  import SaveConfig from 'components/common/dialogs/SaveConfig.vue'
  import { useStore } from 'src/store'
  import { api } from 'boot/axios'
  import { ConnectionStatusEnum } from 'src/types/station'
  import { useQuasar } from 'quasar'

  export default defineComponent({
    // name: 'ComponentName'
    components: {
      Settings, SaveConfig
    },
    props: {
      station: Object
    },
    setup(props) {
      const showDialogProp = ref(false)
      const saveConfig = ref(false)
      const store = useStore()
      const q = useQuasar()

      const deleteStation = async () => {
        await api.delete(`/station/${+props.station?.id}`)
        store.commit('station/mutateKey')
      }

      const showDialog = computed({
        get() {
          return showDialogProp.value
        },
        set(newVal: boolean) {
          store.commit('station/changeCurrentStation', props.station)
          showDialogProp.value = newVal
        }
      })


      const uploadConfiguration = async () => {
        saveConfig.value = true
      }

      return {
        showDialog, deleteStation, ConnectionStatusEnum, uploadConfiguration, saveConfig
      }
    }
  })
</script>
