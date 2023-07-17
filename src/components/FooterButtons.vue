<template>
  <q-card-actions class="flex justify-between btns-wrapper">
    <q-btn
      no-caps
      class="q-mt-md"
      label="Anterior"
      @click="handlePrevious"
      icon="arrow_back"
    />
    <q-btn
      no-caps
      class="q-mt-md"
      label="Próximo"
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
</style>
