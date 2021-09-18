<template>
  <q-page class="column" padding>
    <section class="col-auto q-pa-md">
      Detalles de estación <span class="text-weight-bolder text-h6">{{stationToRead.hostname}}</span>
    </section>
    <section>
      <q-tabs v-model="currentTab">
        <q-tab :key="t" :label="t" :name="t" v-for="t in tabs"/>
      </q-tabs>
    </section>
    <section class="q-pa-lg col flex">
      <q-tab-panels class="col" v-model="currentTab" :key="readings.length">
        <q-tab-panel :key="p" :name="p" class="flex" v-for="p in tabs">
          <q-card class="col row">
            <Radar :data="selectVariable(p)" class="col-12 col-md" v-if="p === 'windDirection'"/>
            <SampleGraphic :data="selectVariable(p)" class="col-12 col-md" v-else>
              <template v-slot:title></template>
            </SampleGraphic>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </section>
  </q-page>
</template>

<script lang="ts">
  import { computed, defineComponent, onBeforeMount, onBeforeUpdate, onMounted, Ref, ref } from 'vue'
  import { StationVariableDto } from 'src/dto/station-variable.dto'
  import SampleGraphic from 'components/graphs/SampleGraphic.vue'
  import Radar from 'components/graphs/Radar.vue'
  import { useStore } from 'src/store'
  import { api } from 'boot/axios'

  const tabs = Object.getOwnPropertyNames(new StationVariableDto())

  export default defineComponent({
    // name: 'PageName'
    components: {
      SampleGraphic, Radar
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    setup: function(props) {
      const currentTab = ref(tabs[0])
      const store = useStore()
      const stationToRead = computed(() => {
        return store.state.station.availableStations.find(sta => sta.id === +props.id)
      })
      const mounted = ref(false)

      const readings: Ref<(StationVariableDto &
        { date: Date, [index: string]: string | number | Date })[]> = ref([])

      const selectVariable = (key: string) => {
        return readings.value.filter(reading => !!(reading[key]))
          .map(reading => ({ date: reading.date, reading: reading[key] }))
      }

      const loadData = async () => {
        const { data } = await api.get<StationVariableDto[]>('/reading')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        readings.value = data as any
      }

      onBeforeMount(async () => {
        await loadData()
      })

      onBeforeUpdate(async () => {
        await loadData()
      })

      onMounted(() => {
        mounted.value = true
      })

      return {
        tabs, currentTab, stationToRead, readings, selectVariable, mounted
      }
    }
  })
</script>
