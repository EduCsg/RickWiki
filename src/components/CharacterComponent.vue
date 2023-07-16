<template>
  <q-card-section horizontal class="card-wrapper">
    <q-card-section class="col-7 q-pt-xs">
      <div class="text-overline">{{ data.id }}</div>

      <div class="text-h5 q-mt-sm q-mb-xs">{{ data.name }}</div>
      <div class="description">
        <p>Status: {{ data.status }}</p>

        <p>Espécie: {{ data.species }}</p>

        <p>Localização: {{ data.location }}</p>

        <p>
          Presente em {{ data.episodes }}
          {{ data.episodes == "1" ? "episódio" : "episódios" }}
        </p>

        <p>Origem: {{ data.origin }}</p>
      </div>
    </q-card-section>

    <q-card-section class="col-5 flex flex-center">
      <q-img
        :src="data.imageURL"
        :alt="`Imagem do personagem ${data.name}`"
        spinner-color="white"
        style="height: auto; max-width: 400px"
      >
      </q-img>
    </q-card-section>
  </q-card-section>
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
