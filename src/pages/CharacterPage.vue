<template>
  <div class="q-pa-md column items-center q-gutter-md">
    <q-card class="my-card" flat bordered>
      <CharacterComponent :data="data" />

      <FooterButtons
        :handlePrevious="handlePreviousCharacter"
        :handleNext="handleNextCharacter"
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
    };
  },

  components: {
    CharacterComponent,
    FooterButtons,
  },

  methods: {
    // faz o request do personagem atual
    getCharacter(id) {
      getCharacter(id)
        .then((res) => {
          this.data = res;
        })
        .catch((err) => {
          console.log(err);
        });
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
        const id = to.params.id;

        this.getCharacter(id);
      },

      immediate: true,
    },
  },
});
</script>
