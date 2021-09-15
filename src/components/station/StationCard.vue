<template>
  <div class="q-pa-lg flex">
    <q-card class="col">
      <q-card-section class="bg-primary text-white text-h6">
        <span>{{station.hostname}}</span>
      </q-card-section>
      <q-card-section class="row justify-end q-gutter-sm">
        <q-btn :class="
        ['col-12 col-sm-auto text-white',
        {'bg-accent': station.connectionStatus !== ConnectionStatusEnum.CONNECTED},
        {'bg-pink-7': station.connectionStatus === ConnectionStatusEnum.CONNECTED}]"
               @click="$store.dispatch('station/connectToStation', station)"
               :disabled="station.connectionStatus === ConnectionStatusEnum.CONNECTING">
          <div v-if="station.connectionStatus === ConnectionStatusEnum.CONNECTED">desconectar</div>
          <div v-if="station.connectionStatus === ConnectionStatusEnum.DISCONNECTED">conectar</div>
          <q-spinner-dots v-if="station.connectionStatus === ConnectionStatusEnum.CONNECTING"></q-spinner-dots>
        </q-btn>
        <q-btn @click="showDialog = true" icon="edit"/>
        <q-btn color="negative" icon="delete" @click="deleteStation"/>
      </q-card-section>
    </q-card>

    <settings v-model="showDialog" :key="showDialog"/>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import Settings from 'components/station/Settings.vue'
  import { useStore } from 'src/store'
  import { api } from 'boot/axios'
  import { ConnectionStatusEnum } from 'src/types/station'

  export default defineComponent({
    // name: 'ComponentName'
    components: {
      Settings
    },
    props: {
      station: Object
    },
    setup(props) {
      const showDialogProp = ref(false)
      const store = useStore()

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

      return {
        showDialog, deleteStation, ConnectionStatusEnum
      }
    }
  })
</script>
