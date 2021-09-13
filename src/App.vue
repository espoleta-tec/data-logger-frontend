<template>
  <router-view/>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { icons } from 'assets/icons/import-icons'
  import 'css-grid-helper/dist/css-grid-helper.css'

  export default defineComponent({
    name: 'App',
    created(): void {
      this.$q.iconMapFn = (iconName => {
        let passName = iconName
        if (passName in icons) {
          return { icon: icons[passName] }
        }
      })
    }
  })
</script>
