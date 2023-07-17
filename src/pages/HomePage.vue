<template>
  <q-page class="flex flex-center">
    <div class="container">
      <ul class="flex q-gutter-md justify-center q-mt-lg">
        <li
          v-for="character in charactersList"
          :key="character.id"
          @click="handleClick(character.id)"
        >
          <SmallCharacterComponent :data="character" />
        </li>
      </ul>

      <div class="btn-wrapper">
        <FooterButtons
          :handlePrevious="handlePrevPage"
          :handleNext="handleNextPage"
          :activePage="Number($route.query.page)"
          :prevText="`Página ${calcChangePage()}`"
          :nextText="`Página ${calcChangePage('next')}`"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { getCharactersByPage } from "src/controllers/CharactersController";
import SmallCharacterComponent from "../components/SmallCharacterComponent.vue";
import FooterButtons from "src/components/FooterButtons.vue";

export default defineComponent({
  name: "HomePage",

  data() {
    return {
      charactersList: [],
    };
  },

  components: {
    SmallCharacterComponent,
    FooterButtons,
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

    handlePrevPage() {
      const page = Number(this.$route.query.page - 1);

      console.log(page);

      if (page == 0) {
        this.$router.push(`/?page=42`);
        return;
      }

      this.$router.push(`/?page=${page}`);
    },

    handleNextPage() {
      const page = Number(this.$route.query.page) + 1;

      if (page == 43) {
        this.$router.push(`/?page=1`);
        return;
      }

      this.$router.push(`/?page=${page}`);
    },

    calcChangePage(to) {
      const activePage = Number(this.$route.query.page);

      let newPage = to == "next" ? activePage + 1 : activePage - 1;

      if (newPage <= 0) {
        return 42;
      }

      if (newPage >= 43) {
        return 1;
      }

      return newPage;
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

<style lang="scss" scoped>
.container {
  max-width: 85vw;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding-bottom: 20px;

  & > div {
    max-width: 70vw;
  }
}

.btn-wrapper {
  width: 100%;
}
</style>
