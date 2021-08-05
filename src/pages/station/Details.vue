<template>
  <q-page class="column" padding>
    <section class="col-auto q-pa-md">
      Detalles de estacion {{id}}
    </section>

    <section class="q-pa-lg col flex">
      <sample-graphic class="col"/>
    </section>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import SampleGraphic from 'components/common/SampleGraphic.vue'

  export default defineComponent({
    // name: 'PageName'
    components: {
      SampleGraphic
    },
    props: {
      id: Number
    },
    setup() {

    }
  })
</script>
