<template>
  <div class="q-pa-md row">
    <div class="col-12 col-md-6 q-pa-md">
      <q-input hint="192.168.1.1" label="Ip"/>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <q-input label="Ip Mask"/>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <q-input label="SSID"/>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <q-input label="Password" type="password"/>
    </div>
    <div class="col-12 col-md-6 q-pa-md">
      <q-input label="hostname"/>
    </div>
    <div class="col-12 col-md-6 q-pa-md flex justify-end items-end">
      <q-btn-dropdown label="Connection mode" color="primary">
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="check"/>
            </q-item-section>
            <q-item-section>AP</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon v-if="false" name="check"/>
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

  export default defineComponent({
    name: 'network'
  })
</script>
