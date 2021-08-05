<template>
  <q-dialog persistent>
    <q-card class="flex" style="width: 80vw; max-width: 1280px; height: 80vh; max-height: 80vh;">
      <q-form @cancel="closeDialog" @submit="closeDialog" class="col column">
        <q-card-section class="col-auto">
          <div class="text-h5">Editar parametros de estacion</div>
        </q-card-section>
        <q-card-section class="col">
          hello
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
  import { defineComponent } from 'vue'


  export default defineComponent({
    // name: 'ComponentName'
    setup() {
      const closeDialog = () => {
        console.log('Dialog closed')
      }
      return {
        closeDialog
      }
    }
  })
</script>
