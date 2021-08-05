<template>
  <q-header elevated>
    <q-toolbar class="q-pa-sm">
      <q-btn @click="$store.commit('layout/toggleDrawer')" color="white" flat icon="menu"/>
      <q-btn @click="$router.go(-1)" flat icon="chevron_left" label="back" v-if="enableBack"/>
      <q-menu>

      </q-menu>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    // name: 'ComponentName'
    setup() {
      const $route = useRoute()
      const enableBack = computed(() => {
        return $route.fullPath !== '/'
      })

      return {
        $route, enableBack
      }
    }
  })
</script>
