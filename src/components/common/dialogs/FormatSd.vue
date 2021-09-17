<template>
  <q-dialog v-bind="$attrs">
    <q-card class="q-pa-md">
      <q-input label="name" v-model="name"/>
      <q-input label="password" v-model="password" type="password"/>
      <div class="text-right q-pa-md">
        <q-btn label="aceptar" color="positive" v-close-popup @click="uploadConfiguration"/>
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Station } from 'src/types/station'
  import axios from 'axios'
  import { useQuasar } from 'quasar'
  import { useStore } from 'src/store'
  import { api } from 'boot/axios'

  export default defineComponent({
    // name: 'ComponentName'
    props: {
      station: Object
    },
    setup(props) {
      const name = ref('')
      const password = ref('')
      const q = useQuasar()
      const store = useStore()

      const uploadConfiguration = async () => {
        const sta = props.station as Station
        const url = sta.currentUrl
        const { data: { access_token, error } } = await axios.post<{ access_token: string, error: string }>(`http:${url}/authenticate`, {
          name: name.value, password: password.value
        }).catch(() => {
          return { data: { error: 'No se pudo autenticar', access_token: null } }
        })
        if (error || !access_token) {
          q.notify({
            message: error,
            color: 'negative'
          })
          return
        }

        await api.get('/format', {
          headers: {
            'Authorization': `Bearer ${access_token}`
          }
        })
        q.notify({
          message: 'exito',
          color: 'positive'
        })
      }

      return { name, password, uploadConfiguration }
    }
  })
</script>
