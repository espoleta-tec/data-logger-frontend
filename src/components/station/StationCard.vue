<template>
  <div class="q-pa-lg">
    <q-card>
      <q-card-section class="bg-primary text-white">
        Estacion 1
      </q-card-section>
      <q-card-section class="flex justify-end q-gutter-sm">
        <q-btn color="primary" label="connect"/>
        <q-btn @click="showDialog = true" icon="edit"/>
        <q-btn color="negative" icon="delete"/>
      </q-card-section>
    </q-card>

    <settings v-model="showDialog"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import Settings from 'components/station/Settings.vue'

  export default defineComponent({
    // name: 'ComponentName'
    components: {
      Settings
    },
    setup() {
      const showDialog = ref(false)

      return {
        showDialog
      }
    }
  })
</script>
