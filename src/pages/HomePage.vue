<template>
  <q-page class="flex flex-center">
    <ul>
      <li
        v-for="character in charactersList"
        :key="character.id"
        class="q-ma-md cursor-pointer character-frame"
        @click="handleClick(character.id)"
      >
        <CharacterComponent :data="character" />
      </li>
    </ul>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { getCharactersByPage } from "src/controllers/CharactersController";
import CharacterComponent from "../components/CharacterComponent.vue";

export default defineComponent({
  name: "HomePage",

  data() {
    return {
      charactersList: [],
    };
  },

  components: {
    CharacterComponent,
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
