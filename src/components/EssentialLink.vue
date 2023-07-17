<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label class="caption" caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>

<script setup>
import { getCharacter } from "../controllers/CharactersController.js";

let characters = [];

// getAllCharacters().then((res) => {
//   characters.push(res);

//   console.log(characters);
// });

// getCharacter(52).then((res) => {
//   characters.push(res);

//   console.log(characters);
// });
</script>

<style lang="scss" scoped>
.caption {
  color: #f1f1f186;
}
</style>
