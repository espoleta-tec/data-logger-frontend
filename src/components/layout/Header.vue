<template>
  <q-header elevated>
    <q-toolbar class="q-pa-sm">
      <q-btn @click="$store.commit('layout/toggleDrawer')" color="white" flat icon="menu"/>
      <q-btn @click="$router.push('/')" flat icon="home"/>
      <q-btn @click="$router.go(-1)" flat icon="chevron_left" label="Atrás" v-if="enableBack"/>
      <q-space/>
      <q-btn-dropdown flat icon="language" v-if="false">
        <q-list>
          <q-item :key="lang" @click="changeLanguage(lang)" clickable v-for="lang in i18n.availableLocales" v-ripple>
            <q-item-section>
              {{lang}}
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn label="Cerrar" color="pink-7" @click="closeApp"/>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { api } from 'boot/axios'


  export default defineComponent({
    // name: 'ComponentName'
    setup() {
      const i18n = useI18n()
      const route = useRoute()
      const enableBack = computed(() => {
        return route.fullPath !== '/'
      })
      const changeLanguage = (locale: string) => {
        i18n.locale.value = locale
      }
      const closeApp = async () => {
        await api.get('shutdown')
        window.location.reload()
      }

      return {
        $route: route, enableBack, i18n, changeLanguage, closeApp
      }
    }
  })
</script>
