<template>
  <q-page class="row items-start">
    <main-card :key="i" :to="`/station/${i}`" class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="i in 4"/>
  </q-page>
</template>

<script lang="ts">
  import { Meta, Todo } from 'components/models'
  import { defineComponent, ref } from 'vue'
  import MainCard from 'components/MainCard.vue'

  export default defineComponent({
    name: 'PageIndex',
    components: { MainCard },
    setup() {
      const todos = ref<Todo[]>([
        {
          id: 1,
          content: 'ct1'
        },
        {
          id: 2,
          content: 'ct2'
        },
        {
          id: 3,
          content: 'ct3'
        },
        {
          id: 4,
          content: 'ct4'
        },
        {
          id: 5,
          content: 'ct5'
        }
      ])
      const meta = ref<Meta>({
        totalCount: 1200
      })
      return { todos, meta }
    }
  })
</script>
