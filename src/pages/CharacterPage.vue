<template>
  <div class="q-pa-md column items-center q-gutter-md">
    <q-card class="my-card" flat bordered>
      <CharacterComponent :data="data" />

      <FooterButtons
        :handlePrevious="handlePreviousCharacter"
        :handleNext="handleNextCharacter"
        :prevText="prevCharacter.name ? prevCharacter.name.split(' ')[0] : ''"
        :nextText="nextCharacter.name ? nextCharacter.name.split(' ')[0] : ''"
      />
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getCharacter } from "src/controllers/CharactersController";
import CharacterComponent from "../components/CharacterComponent.vue";
import FooterButtons from "src/components/FooterButtons.vue";

export default defineComponent({
  name: "CharacterPage",

  data() {
    return {
      data: {}, // inicializa um objeto vazio
      prevCharacter: {},
      nextCharacter: {},
    };
  },

  components: {
    CharacterComponent,
    FooterButtons,
  },

  methods: {
    // faz o request do personagem atual
    async getCharacterById(id) {
      try {
        return await getCharacter(id);
      } catch (err) {
        console.log(err);
      }
    },

    getNextId(id) {
      let newId = id + 1;

      if (newId >= 827) {
        newId = 1;
      }

      return newId;
    },

    getPrevId(id) {
      let newId = id - 1;

      if (newId <= 0) {
        newId = 826;
      }

      return newId;
    },

    async setCharacters(to) {
      const id = Number(to.params.id);

      const nextId = this.getNextId(id);
      const prevId = this.getPrevId(id);

      const [current, next, prev] = await Promise.all([
        this.getCharacterById(id),
        this.getCharacterById(nextId),
        this.getCharacterById(prevId),
      ]);

      this.data = current;
      this.nextCharacter = next;
      this.prevCharacter = prev;
    },

    // navega para a página do personagem anterior
    handlePreviousCharacter() {
      const id = Number(this.$route.params.id) - 1;

      if (id > 0) {
        this.$router.push(`/character/${id}`);
      } else {
        this.$router.push(`/character/826`);
      }
    },

    // navega para a página do próximo personagem
    handleNextCharacter() {
      const id = Number(this.$route.params.id) + 1;

      if (id < 827) {
        this.$router.push(`/character/${id}`);
      } else {
        this.$router.push(`/character/1`);
      }
    },
  },

  watch: {
    // faz o request do id atual quando a rota muda
    $route: {
      handler(to, from) {
        this.setCharacters(to);
      },

      immediate: true,
    },
  },
});
</script>
