<template>
  <q-item
    :href="link"
    clickable
    tag="a"
    target="_blank"
  >
    <q-item-section
      avatar
      v-if="icon"
    >
      <q-icon :name="icon"/>
    </q-item-section>

    <q-item-section :class="$q.screen.gt.sm ? 'q-mini-drawer-hide' : ''">
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'EssentialLink',
    props: {
      title: {
        type: String,
        required: true
      },

      caption: {
        type: String,
        default: ''
      },

      link: {
        type: String,
        default: '#'
      },

      icon: {
        type: String,
        default: ''
      }
    },
    setup() {
      return {

      };
    }
  });
</script>
