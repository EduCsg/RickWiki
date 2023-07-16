<template>
  <q-layout view="hHh lpr lfr">
    <q-header elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://rickandmortyapi.com/icons/icon-512x512.png?v=1538abef51e33ef514e8fe1ab9aeab4e"
              alt="Logo do site"
              class="logoInvert"
            />
          </q-avatar>
          &nbsp; RickWiki
        </q-toolbar-title>

        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawer" side="left" bordered temporary>
      <q-list>
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label class="caption" caption
              >Voltar para a home</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label class="caption" caption
              >Código fonte no Github
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- <q-drawer show-if-above v-model="rightDrawer" side="right" bordered>
      <q-item>
        <q-item-section>
          <q-item-label>Outros Personagens</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator dark></q-separator>

      <q-item @click="console.log('teste')">
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar6.jpg" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Jane</q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar6.jpg" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Jane</q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar6.jpg" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Jane</q-item-section>
      </q-item>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawer = ref(false);
    const rightDrawer = ref(false);

    return {
      leftDrawer,
      toggleLeftDrawer() {
        leftDrawer.value = !leftDrawer.value;
      },

      rightDrawer,
      toggleRightDrawer() {
        rightDrawer.value = !rightDrawer.value;
      },
    };
  },
};
</script>
