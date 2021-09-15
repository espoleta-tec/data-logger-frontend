<template>
  <q-page padding>
    {{$store.state.station.connectedStations}}
    <section>
      <q-toolbar class="justify-end">
        <q-card bordered class="q-pl-md q-pr-md q-pa-sm" style="border-radius: 9999px">
          <q-input borderless class="col-5" dense
                   placeholder="Buscar estacion" style="max-width: 30rem; min-width: 25rem" v-model="filter">
            <template v-slot:append>
              <q-btn flat icon="search" round v-if="!filter.length"/>
              <q-btn @click="filter = ''" flat icon="close" round v-else/>
            </template>
          </q-input>
        </q-card>
      </q-toolbar>
    </section>
    <section :class="['grid grid-cols-1 grid-rows-auto',
    {'grid-cols-2': $q.screen.sm},
    {'grid-cols-3': $q.screen.gt.sm}]">
      <station-card :station="station" :key="station" class="col-12 col-sm-6 col-lg-4"
                    v-for="station in $store.state.station.availableStations"/>
      <skeleton-station-card class="col-12 col-sm-6 col-lg-4"/>
    </section>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, onBeforeMount } from 'vue'
  import StationCard from 'components/station/StationCard.vue'
  import SkeletonStationCard from 'components/station/SkeletonStationCard.vue'
  import { api } from 'boot/axios'
  import { useStore } from 'src/store'

  export default defineComponent({
    // name: 'PageName'
    components: {
      StationCard, SkeletonStationCard
    },
    data() {
      return {
        filter: ''
      }
    },
    setup() {
      const store = useStore()
      onBeforeMount(async () => {
        const { data } = await api.get('/station')

        store.commit('station/loadAvailableStations', data)
      })
    }
  })
</script>
