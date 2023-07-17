<template>
  <q-page class="flex flex-center">
    <ul class="flex q-gutter-md justify-center q-mt-lg cards-wrapper">
      <li
        v-for="character in charactersList"
        :key="character.id"
        @click="handleClick(character.id)"
      >
        <SmallCharacterComponent :data="character" />
      </li>
    </ul>
  </q-page>
</template>

<style lang="scss" scoped>
.cards-wrapper {
  max-width: 85vw;
}
</style>

<script>
import { defineComponent } from "vue";
import { getCharactersByPage } from "src/controllers/CharactersController";
import SmallCharacterComponent from "../components/SmallCharacterComponent.vue";

export default defineComponent({
  name: "HomePage",

  data() {
    return {
      charactersList: [],
    };
  },

  components: {
    SmallCharacterComponent,
  },

  methods: {
    getByPage(page) {
      getCharactersByPage(page)
        .then((res) => {
          this.charactersList = res;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },

    handleClick(id) {
      this.$router.push(`/character/${id}`);
    },
  },

  watch: {
    $route: {
      handler(to) {
        const page = to.query.page;

        this.getByPage(page);
      },

      immediate: true,
    },
  },
});
</script>
