<template>
  <q-dialog persistent>
    <q-card class="flex" style="width: 80vw; max-width: 1280px; height: 80vh; max-height: 80vh;">
      <q-form @cancel="closeDialog" @submit="closeDialog" class="col column">
        <q-card-section class="col-auto">
          <div class="text-h5">Editar parametros de estacion</div>
        </q-card-section>
        <q-card-section class="col column">
          <q-tabs v-model="currentTab">
            <q-tab :key="tab" :label="tab" :name="tab" v-for="tab in tabs"/>
          </q-tabs>
          <q-tab-panels class="col flex" style="border-radius: 12px; border: solid 1px black" v-model="currentTab">
            <q-tab-panel :key="tab" :name="tab" class="col flex q-pa-md" v-for="tab in tabs">
              <q-scroll-area class="col">
                <component :is="tab"></component>
              </q-scroll-area>
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
        <q-card-section class="col-auto text-right q-gutter-md">
          <q-btn color="positive" label="save" type="submit" v-close-popup/>
          <q-btn color="negative" label="cancel" type="cancel" v-close-popup/>
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useStore } from 'src/store'

  const tabs = ['network', 'variables', 'security']


  export default defineComponent({
    // name: 'ComponentName'
    setup() {
      const store = useStore()

      const closeDialog = async () => {
        await store.dispatch('station/saveCurrentStation')
      }

      const currentTab = ref(tabs[0])

      return {
        closeDialog, currentTab, tabs
      }
    }
  })
</script>
