<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal class="card-wrapper">
      <q-card-section class="col-7 q-pt-xs bgblack">
        <div class="text-overline">{{ $route.params.id }}</div>

        <div class="text-h5 q-mt-sm q-mb-xs">{{ data.name }}</div>
        <div class="description">
          <p>Status: {{ data.status }}</p>

          <p>Espécie: {{ data.species }}</p>

          <p>Localização: {{ data.location }}</p>

          <p>Presente em {{ data.episodes }} episódios</p>

          <p>Origem: {{ data.origin }}</p>
        </div>
      </q-card-section>

      <q-card-section class="col-5 flex flex-center bg-dark">
        <q-img
          :src="data.imageURL"
          :alt="`Imagem do personagem ${data.name}`"
          spinner-color="white"
          style="height: auto; max-width: 400px"
        >
        </q-img>
      </q-card-section>
    </q-card-section>

    <q-separator></q-separator>

    <q-card-actions class="flex justify-between btns-wrapper">
      <q-btn
        class="q-mt-md"
        color="primary"
        label="Anterior"
        @click="handlePreviousCharacter"
        icon="arrow_back"
      />
      <q-btn
        class="q-mt-md"
        color="primary"
        label="Próximo"
        @click="handleNextCharacter"
        icon-right="arrow_forward"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterComponent",

  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
