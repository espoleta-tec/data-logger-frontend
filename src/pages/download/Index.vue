<template>
  <q-page padding>
    <q-tabs active-bg-color="primary" active-color="white" v-model="currentTab">
      <q-tab :key="station" :label="`${station.hostname}`" :name="station.id"
             v-for="station in $store.state.station.connectedStations"/>
    </q-tabs>
    <div class="q-pa-md"/>
    <q-tab-panels class="q-card" style="min-height: 500px" v-model="currentTab">
      <download-view :name="station.id" :station="station" v-for="station in $store.state.station.connectedStations" :key="station.id"/>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useStore } from 'src/store'
  import DownloadView from 'components/download/DownloadView.vue'

  export default defineComponent({
    // name: 'PageName'
    components: {
      DownloadView
    },
    setup() {
      const store = useStore()
      const currentTab = ref(store.state.station.connectedStations?.[0]?.id || 0)

      return {
        currentTab
      }
    }
  })
</script>
