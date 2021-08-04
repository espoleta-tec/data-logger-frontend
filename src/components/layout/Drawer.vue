<template>
  <q-drawer behavior="desktop"
            class="bg-secondary column" elevated persistent
            v-model="$store.state.layout.drawerState">
    <q-list class="text-body1 text-white col">
      <q-item :key="i" @click="$store.commit('layout/changeMini', true)"
              active-class="bg-white" clickable v-for="i in 6" v-ripple>
        <q-item-section avatar>
          <q-icon name="person"/>
        </q-item-section>
        <q-item-section>
          <span>Section</span>
        </q-item-section>
      </q-item>
    </q-list>
    <q-space/>
  </q-drawer>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import { useStore } from 'src/store';

  export default defineComponent({
    // name: 'ComponentName'
    setup() {
      const fixDrawer = ref(false);
      const $store = useStore();
      const chevron = computed(() => {
        return `chevron_${$store.state.layout.mini ? 'right' : 'left'}`;
      });
      return {
        fixDrawer, chevron
      };
    }
  });
</script>
