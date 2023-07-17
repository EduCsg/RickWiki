<template>
  <div class="wrapper">
    <div class="img-title">
      <img
        :src="data.imageURL"
        alt="Imagem do fulano"
        spinner-color="white"
        style="max-width: 160px"
      />

      <h1 class="character-name text-center">{{ data.name }}</h1>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    font-size: 1rem;
    align-self: end;
    line-height: 0;
    color: #f1f1f186;
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
.img-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;

  & > img {
    border-radius: 8px;
    align-self: center;
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
