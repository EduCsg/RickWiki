<template>
  <q-item clickable tag="a" :target="isBlank ? '_blank' : ''" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsideLinks",
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },

    isBlank: {
      type: Boolean,
      default: null,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.caption {
  color: #f1f1f186;
}
</style>
