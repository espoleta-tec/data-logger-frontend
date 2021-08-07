<template>
  <q-page padding>
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
    <section class="row">
      <station-card :key="i" class="col-12 col-sm-6 col-lg-4" v-for="i in 6"/>
      <skeleton-station-card class="col-12 col-sm-6 col-lg-4"/>
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
    },
    data() {
      return {
        filter: ''
      }
    }
  })
</script>

<style lang="scss">

</style>
