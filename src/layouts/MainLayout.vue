<template>
  <q-layout view="hHh Lpr lFf">
    <Header/>
    <Drawer/>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Screen } from 'quasar';
  import Drawer from 'components/layout/Drawer.vue';
  import Header from 'components/layout/Header.vue';

  const drawerStates = [
    'mini', 'normal'
  ];

  export default defineComponent({
    name: 'MainLayout',

    components: {
      Drawer, Header
    },

    setup() {
      const leftDrawerOpen = ref(true);
      const miniVariant = ref(true);

      return {
        leftDrawerOpen,
        miniVariant,
        toggleLeftDrawer() {
          if (Screen.gt.sm) {
            miniVariant.value = !miniVariant.value;
          } else {
            miniVariant.value = false;
            leftDrawerOpen.value = !leftDrawerOpen.value;
          }
        }
      };
    }
  });
</script>
