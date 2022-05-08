<template>
  <q-page class="column" padding>
    <template v-if="mounted">
      <section class="col-auto q-pa-md flex justify-between">
        <div>Detalles de estación <span class="text-weight-bolder text-h6">{{ stationToRead?.hostname }}</span></div>
        <a :download="`lecturas_${stationToRead?.hostname}_${new Date().toISOString()}.csv`"
           :href="`${$api.defaults.baseURL}/reading/csv/${stationToRead?.id}`"
           style="text-decoration: none">
          <q-btn color="primary">Descargar lecturas de estación</q-btn>
        </a>
      </section>
      <section>
        <q-tabs v-model="currentTab">
          <q-tab v-for="t in tabs" :key="t" :label="$t(`variables.${t}`)" :name="t"></q-tab>
        </q-tabs>
      </section>
      <section class="q-pa-lg col flex">
        <q-tab-panels :key="readings.length" v-model="currentTab" class="col">
          <q-tab-panel v-for="p in tabs" :key="p" :name="p" class="flex">
            <q-card class="col row">
              <Radar v-if="p === 'windDirection'" :data="selectVariable(p)" class="col-12 col-md"/>
              <SampleGraphic v-else :data="selectVariable(p)" class="col-12 col-md">
                <template v-slot:title></template>
              </SampleGraphic>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
      </section>
    </template>
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
      return readings.value
        .map((reading, idx, parentReadings) => {
          let readValue = reading[key]
          if (key === 'rain' && idx > 0) {
            readValue = reading[key] - parentReadings[idx - 1][key]
          }
          return {
            date: reading.date, reading: readValue
          }
        })
    }

    const loadData = async () => {
      const { data: variables } = await api.get<StationVariableDto[]>('/reading', {
        params: {
          'filter[$and][Station]': props.id,
          order: 'date'
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      readings.value = variables as any
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
