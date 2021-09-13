<template>
  <q-drawer class="bg-secondary column"
            elevated show-if-above
            v-model="drawerState">
    <q-space/>
    <q-list class="text-body1 text-white col">
      <q-item :active="currentRoute.name === route.name" :key="route.path" @click="router.push(`/${route.path}`)"
              active-class="bg-white" clickable v-for="route in routes" v-ripple>
        <q-item-section avatar>
          <q-icon name="person"/>
        </q-item-section>
        <q-item-section>
          <span>{{route.name}}</span>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import { useStore } from 'src/store'
  import { useRoute, useRouter } from 'vue-router'

  export default defineComponent({
    // name: 'ComponentName'
    setup() {
      const fixDrawer = ref(false)
      const store = useStore()
      const router = useRouter()
      const currentRoute = useRoute()

      const chevron = computed(() => {
        return `chevron_${store.state.layout.mini ? 'right' : 'left'}`
      })

      const drawerState = computed({
        get() {
          return store.state.layout.drawerState
        },
        set(newValue: boolean) {
          store.commit('layout/changeDrawerState', newValue)
        }
      })
      const routes = computed(() => {
        let rs = router.getRoutes().filter(r => r.path === '/')[1]

        if (!rs) {
          return []
        }

        return rs.children.filter(r => r.name)
      })
      return {
        fixDrawer, chevron, routes, currentRoute, drawerState
      }
    }
  })
</script>
