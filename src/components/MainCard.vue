<template>
  <div class="q-pa-md flex items-stretch content-stretch">
    <q-card @click="$router.push(to)" class="col cursor-pointer" style="min-height: 15rem" v-ripple>
      <q-card-section class="bg-primary text-white text-h2" style="height: 70%">
        30 C
      </q-card-section>
      <q-card-section>Conectar</q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    // name: 'ComponentName'
    props: {
      to: String
    }
  });
</script>
