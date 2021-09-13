<template>
  <div class="q-pa-lg flex" @click="showDialog = true">
    <q-card class="cursor-pointer col flex flex-center" v-ripple>
      <q-card-section class="flex no-wrap flex-center q-gutter-sm">
        <q-icon class="text-h3" name="add"/>
      </q-card-section>
    </q-card>

    <Settings v-model="showDialog"/>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import Settings from 'components/station/Settings.vue'
  import { useStore } from 'src/store'

  export default defineComponent({
    // name: 'ComponentName'
    components: {
      Settings
    },
    setup() {
      const newStation = {
        hostname: null,
        Settings: {}
      }
      const showDialogProp = ref(false)
      const store = useStore()


      const showDialog = computed({
        get() {
          return showDialogProp.value
        },
        set(newVal: boolean) {
          store.commit('station/changeCurrentStation', newStation)
          showDialogProp.value = newVal
        }
      })

      return { newStation, showDialog }
    }
  })
</script>
