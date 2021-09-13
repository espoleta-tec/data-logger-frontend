<template>
  <div class="q-pa-md row">
    <div class="col-12 col-md-6 q-pa-md">
      <q-input v-model="current.ip" hint="192.168.1.1" label="Ip"/>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <q-input v-model="current.ipMask" label="Ip Mask"/>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <q-input v-model="current.ssid" label="SSID"/>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <q-input v-model="current.password" label="Password" type="password"/>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <q-input v-model="current.hostname" label="hostname"/>
    </div>
    <div class="col-12 col-md-6 q-pa-md flex justify-end items-end">
      <q-btn-dropdown label="Connection mode" color="primary">
        <q-list>
          <q-item clickable v-close-popup @click="current.connectionMode = 'AP'">
            <q-item-section avatar>
              <q-icon name="check" v-if="current.connectionMode === 'AP'"/>
            </q-item-section>
            <q-item-section>AP</q-item-section>
          </q-item>
          <q-item v-close-popup clickable @click="current.connectionMode = 'STATION'">
            <q-item-section avatar>
              <q-icon name="check" v-if="current.connectionMode === 'STATION'"/>
            </q-item-section>
            <q-item-section>Station</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useCurrentStation } from 'src/utils/storeInterface/use-current-station'

  export default defineComponent({
    name: 'network',
    setup() {
      return { current: useCurrentStation() }
    }
  })
</script>
