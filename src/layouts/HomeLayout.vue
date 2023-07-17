<template>
  <q-layout view="hHh lpr lfr">
    <q-header elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="cursor-pointer" @click="handleClick()">
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

    <q-drawer class="bg-dark" v-model="leftDrawerOpen">
      <q-list>
        <q-item-label header> Links Relacionados </q-item-label>

        <AsideLinks
          v-for="link in AsideLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import AsideLinks from "components/AsideLinks.vue";

const linksList = [
  {
    title: "Home",
    icon: "home",
    link: "/",
    isBlank: false,
  },
  {
    title: "Github",
    icon: "code",
    link: "https://github.com/EduCsg/RickWiki",
    isBlank: true,
  },
  {
    title: "API Docs",
    icon: "webhook",
    link: "https://rickandmortyapi.com",
    isBlank: true,
  },
  {
    title: "Quero contribuir!",
    icon: "emoji_people",
    link: "https://github.com/EduCsg/RickWiki/pulls",
    isBlank: true,
  },
  {
    title: "Encontrei um bug!",
    icon: "bug_report",
    link: "https://github.com/EduCsg/RickWiki/issues/new",
    isBlank: true,
  },
];

export default defineComponent({
  name: "HomeLayout",

  components: {
    AsideLinks,
  },

  methods: {
    handleClick() {
      this.$router.push("/");
    },
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      AsideLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.logoInvert {
  filter: invert(1);
}
</style>
