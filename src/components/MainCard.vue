<template>
  <div class="q-pa-md flex items-stretch content-stretch darken">
    <q-card @click="$router.push(to)" class="col cursor-pointer" style="min-height: 15rem" v-ripple>
      <q-card-section class="bg-primary text-white text-h2" style="height: 70%">
        {{station.hostname}}
      </q-card-section>
      <q-card-section :class="[{'text-positive': connected}]">{{station.ip}}</q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useStore } from 'src/store'

  export default defineComponent({
    // name: 'ComponentName'
    props: {
      to: String,
      station: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const store = useStore()

      const connected = computed(() => {
        const connectedStas = store.state.station.connectedStations.find(c => c.id === props.station.id)
        return connectedStas !== undefined
      })
      return { connected }
    }
  })
</script>
