<template>
  <div class="wrapper">
    <img
      :src="data.imageURL"
      alt="Imagem do fulano"
      spinner-color="white"
      style="max-width: 160px"
    />

    <h1 class="character-name">{{ data.name }}</h1>

    <div class="character-info">
      <div class="info-details">
        <p class="info-title">Status</p>
        <p>{{ data.status }}</p>
      </div>

      <div class="info-details">
        <p class="info-title">Espécie</p>
        <p>{{ data.species }}</p>
      </div>

      <div class="info-details">
        <p class="info-title">Localização</p>
        <p>{{ data.location }}</p>
      </div>

      <div class="info-details">
        <p class="info-title">Presente em</p>
        <p>
          {{ data.episodes }}
          {{ data.episodes == "1" ? "episódio" : "episódios" }}
        </p>
      </div>

      <div class="info-details">
        <p class="info-title">Origem</p>
        <p>{{ data.origin }}</p>
      </div>
    </div>

    <p class="id-tag">{{ data.id }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SmallCharacterComponent",

  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  background-color: $dark;
  border: 1px solid $dark;
  border-radius: 8px;
  padding: 20px 10px 5px 10px;

  &:hover {
    cursor: pointer;
    border: 1px solid white;
  }

  & > .id-tag {
    position: absolute;
    right: 15px;
    bottom: -5px;
    font-size: 1rem;
  }

  & > img {
    border-radius: 8px;
    align-self: center;
  }

  .character-name {
    align-self: center;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: normal;
  }

  .character-info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 1rem;
    color: #f1f1f186;
  }
}

.info-details {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & > p {
    margin: 0;
  }

  .info-title {
    color: #fff;
  }
}
</style>
