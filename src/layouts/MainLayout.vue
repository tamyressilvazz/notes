<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="list"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Notes
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Note Pages
        </q-item-label>

        <NotesPages
          v-for="pages in notespages"
          :key="pages.title"
          v-bind="pages"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="row q-ma-md">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import NotesPages from 'components/NotesPages.vue'

const linksList = [
  {
    title: 'Personal Home',
    caption: 'layout.home.caption',
    icon: 'home',
    link: '/#'
  },
  {
    title: 'Quick Note',
    caption: 'Quickly create a rich document.',
    icon: 'done',
    link: '/quick-note'
  },
  {
    title: 'Journal',
    caption: 'Document your life - daily happenings, special occasions, and reflections on your goals.',
    icon: 'book',
    link: '/journal'
  },
  {
    title: 'Add a page',
    caption: 'Add a page in your notes',
    icon: 'bookmark_add',
    link: '/add'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    NotesPages
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      notespages: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
