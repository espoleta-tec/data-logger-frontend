<template>
  <q-page class="column" padding>
    <section class="col-auto q-pa-md">
      Detalles de estacion {{id}}
    </section>
    <section>
      <q-tabs v-model="currentTab">
        <q-tab :key="t" :label="t" :name="t" v-for="t in tabs"/>
      </q-tabs>
    </section>
    <section class="q-pa-lg col flex">
      <q-tab-panels class="col" v-model="currentTab">
        <q-tab-panel :key="p" :name="p" class="flex" v-for="p in tabs">
          <q-card class="col row">
            <Radar class="col-12 col-md" v-if="p.toLowerCase().indexOf('wind') !== -1"/>
            <SampleGraphic class="col-12 col-md">
              <template v-slot:title>{{p}}</template>
            </SampleGraphic>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </section>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { StationVariableDto } from 'src/dto/station-variable.dto'
  import SampleGraphic from 'components/graphs/SampleGraphic.vue'
  import Radar from 'components/graphs/Radar.vue'

  const tabs = Object.getOwnPropertyNames(new StationVariableDto())
  tabs.push('transpiration')

  export default defineComponent({
    // name: 'PageName'
    components: {
      SampleGraphic, Radar
    },
    props: {
      id: Number
    },
    setup() {
      const currentTab = ref(tabs[0])

      return {
        tabs, currentTab
      }
    }
  })
</script>
