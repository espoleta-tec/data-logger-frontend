<template>
  <q-layout view="hHh Lpr lFf" :key="$store.state.station.moduleKey">
    <Header/>
    <Drawer/>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
  import { defineComponent, onBeforeUpdate, onMounted, ref } from 'vue'
  import { Screen } from 'quasar'
  import Drawer from 'components/layout/Drawer.vue'
  import Header from 'components/layout/Header.vue'
  import { useStore } from 'src/store'
  import { api } from 'boot/axios'

  export default defineComponent({
    name: 'MainLayout',

    components: {
      Drawer, Header
    },

    setup() {
      const leftDrawerOpen = ref(true)
      const miniVariant = ref(true)
      const store = useStore()
      const loadData = async () => {
        const { data } = await api.get('/station')
        store.commit('station/loadAvailableStations', data)
      }

      onMounted(() => loadData())
      onBeforeUpdate(() => loadData())

      return {
        leftDrawerOpen,
        miniVariant,
        toggleLeftDrawer() {
          if (Screen.gt.sm) {
            miniVariant.value = !miniVariant.value
          } else {
            miniVariant.value = false
            leftDrawerOpen.value = !leftDrawerOpen.value
          }
        }
      }
    }
  })
</script>
