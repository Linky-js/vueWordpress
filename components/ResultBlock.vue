<script setup>
import { ref } from "vue";

const props = defineProps({
  result: {
    type: Object,
    default: {},
  },
});

const images = ref([]);
watch(
  () => props.result.images,
  async (newVal) => {
    if (!Array.isArray(newVal) || newVal.length === 0) return;

    try {
      const results = await Promise.all(
        newVal.map((id) =>
          $fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/media/${id.foto}`)
        )
      );
      images.value = results.map((img) => img.source_url);
    } catch (error) {
      console.error("Ошибка при загрузке изображений:", error);
    }
  },
  { immediate: true }
);
const title = ref("результат");

</script>
<template>
  <section class="result-block">
    <div class="container">
      <h2 class="result-block__title">{{ title }}</h2>
      <div class="result-block__images">
        <div
          v-for="image in images"
          :key="image.id"
          class="result-block__img-wrapper"
        >
          <img class="result-block__img" :src="image" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.result-block {
  padding-top: 100px;
  @media (max-width: 991.98px) {
    padding-top: 40px;
  }
  .container {
    margin-left: 0;
  }
  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    margin-bottom: 56px;

    @media (max-width: 991.98px) {
      font-size: 44px;
      margin-bottom: 40px;
    }
    @media (max-width: 767.98px) {
      font-size: 38px;
      margin-bottom: 30px;
    }
    @media (max-width: 575.98px) {
      font-size: 32px;
      margin-bottom: 20px;
    }
  }

  &__images {
    display: grid;
    gap: 20px;
    @media (max-width: 575.98px) {
      gap: 15px;
    }
  }

  &__img-wrapper {
    position: relative;
    padding-bottom: calc(637 / 1170 * 100%);
    overflow: hidden;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
