<template>
  <q-card-actions class="flex justify-between btns-wrapper">
    <q-btn
      no-caps
      class="q-mt-md"
      :label="prevText"
      @click="handlePrevious"
      icon="arrow_back"
    />

    <p class="activePage">
      {{ activePage ? "Página " + activePage : "" }}
    </p>

    <q-btn
      no-caps
      class="q-mt-md"
      :label="nextText"
      @click="handleNext"
      icon-right="arrow_forward"
    />
  </q-card-actions>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterButtons",

  props: {
    handlePrevious: {
      type: Function,
      required: true,
    },

    handleNext: {
      type: Function,
      required: true,
    },

    activePage: {
      type: Number,
    },

    prevText: {
      type: String,
      required: true,
    },

    nextText: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.btns-wrapper {
  & > * {
    background-color: $dark;
    margin: 0 0.5rem;
    text-align: center;
  }
}

.q-btn {
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}

.activePage {
  background-color: $dark-page;
  font-size: 1rem;

  &:hover {
    background-color: $dark-page;
    cursor: default;
  }
}
</style>
