<template>
  <div :class="['q-pa-md row grid grid-cols-1',
  {'grid-cols-2': $q.screen.gt.xs}]">
    <div class="q-pa-md">
      <q-input v-model="current.hostname" label="hostname"/>
    </div>
    <div class="q-pa-md">
      <q-input :disable="current.connectionMode === STATION && current.dhcp" v-model="current.ip" hint="192.168.1.1"
               label="Ip"/>
    </div>
    <div class="q-pa-md" v-if="false">
      <q-input v-model="current.ipMask" label="Ip Mask"/>
    </div>
    <div class="q-pa-md">
      <q-input v-model="current.ssid" label="SSID"/>
    </div>
    <div class="q-pa-md">
      <q-input v-model="current.password" label="Password" type="password"/>
    </div>
    <div class="q-pa-md">
      <!--      <q-btn-dropdown class="col" label="Modo de conexión" color="primary">-->
      <!--        <q-list>-->
      <!--          <q-item clickable v-close-popup @click="current.connectionMode = AP">-->
      <!--            <q-item-section avatar>-->
      <!--              <q-icon name="check" v-if="current.connectionMode === AP"/>-->
      <!--            </q-item-section>-->
      <!--            <q-item-section>AP</q-item-section>-->
      <!--          </q-item>-->
      <!--          <q-item v-close-popup clickable @click="current.connectionMode = STATION">-->
      <!--            <q-item-section avatar>-->
      <!--              <q-icon name="check" v-if="current.connectionMode === STATION"/>-->
      <!--            </q-item-section>-->
      <!--            <q-item-section>Station</q-item-section>-->
      <!--          </q-item>-->
      <!--        </q-list>-->
      <!--      </q-btn-dropdown>-->
      Modo de trabajo
      <q-toggle :label="current.connectionMode" :true-value="AP" :false-value="STATION"
                v-model="current.connectionMode"/>
    </div>
    <div class="q-pa-md">
      Asignación de IP
      <q-toggle label="DHCP" v-model="current.dhcp"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useCurrentStation } from 'src/utils/storeInterface/use-current-station'
  import { OperationModeEnum } from 'src/types/station'

  export default defineComponent({
    name: 'red',
    setup() {
      return { current: useCurrentStation(), ...OperationModeEnum }
    }
  })
</script>
