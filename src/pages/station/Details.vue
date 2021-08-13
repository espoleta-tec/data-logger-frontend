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
          <SampleGraphic class="col">
            <template v-slot:title>{{p}}</template>
          </SampleGraphic>
        </q-tab-panel>
      </q-tab-panels>
    </section>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { StationVariableDto } from 'src/dto/station-variable.dto'
  import SampleGraphic from 'components/common/SampleGraphic.vue'

  const tabs = Object.getOwnPropertyNames(new StationVariableDto())

  export default defineComponent({
    // name: 'PageName'
    components: {
      SampleGraphic
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
