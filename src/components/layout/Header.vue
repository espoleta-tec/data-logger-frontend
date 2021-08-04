<template>
  <q-header elevated>
    <q-toolbar class="q-pa-sm q-gutter-md">
      <q-btn @click="$store.commit('layout/toggleDrawer')" color="white" flat icon="menu" round/>
      <q-btn @click="$router.go(-1)" flat icon="chevron_left" round v-if="enableBack"/>
      <q-toolbar-title>
        Meteor Data Logger
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    // name: 'ComponentName'
    setup() {
      const $route = useRoute();
      const enableBack = computed(() => {
        return $route.fullPath !== '/';
      });

      return {
        $route, enableBack
      };
    }
  });
</script>
