<template>
  <q-page padding>
    <section class="row">
      <station-card :key="i" class="col-12 col-sm-6 col-md-4" v-for="i in 6"/>
      <skeleton-station-card class="col-12 col-sm-6 col-md-4"/>
    </section>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import StationCard from 'components/station/StationCard.vue'
  import SkeletonStationCard from 'components/station/SkeletonStationCard.vue'

  export default defineComponent({
    // name: 'PageName'
    components: {
      StationCard, SkeletonStationCard
    }
  })
</script>
