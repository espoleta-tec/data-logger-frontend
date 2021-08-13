<template>
  <q-page class="row items-start">
    <main-card :key="i" :to="`/station/${i}`" class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="i in 4"/>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MainCard from 'components/MainCard.vue'

  export default defineComponent({
    name: 'PageIndex',
    components: { MainCard }
  })
</script>
