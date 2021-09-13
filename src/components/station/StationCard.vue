<template>
  <div class="q-pa-lg">
    <q-card>
      <q-card-section class="bg-primary text-white">
        {{station.hostname}}
      </q-card-section>
      <q-card-section class="row justify-end q-gutter-sm">
        <q-btn class="col-12 col-sm-auto" color="accent" label="connect"/>
        <q-btn @click="showDialog = true" icon="edit"/>
        <q-btn color="negative" icon="delete" @click="deleteStation"/>
      </q-card-section>
    </q-card>

    <settings :station="station" v-model="showDialog" :key="showDialog"/>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import Settings from 'components/station/Settings.vue'
  import { useStore } from 'src/store'
  import { api } from 'boot/axios'

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
        await api.delete(`/station/${+props.station?.id || -1}`)
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
        showDialog, deleteStation
      }
    }
  })
</script>
