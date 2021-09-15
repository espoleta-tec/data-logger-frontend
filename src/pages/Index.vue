<template>
  <q-page class="row items-start">
    <h1 class="text-center text-h1" v-if="$store.state.station.availableStations.length === 0">No hay estaciones
      conectadas</h1>
    <main-card :station="station" :key="station.id" :to="`/station/${station.id}`"
               class="col-12 col-sm-6 col-md-4 col-lg-3"
               v-for="station in $store.state.station.availableStations"/>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MainCard from 'components/MainCard.vue'

  export default defineComponent({
    name: 'PageIndex',
    components: { MainCard }
  })
</script>
