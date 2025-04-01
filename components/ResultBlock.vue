<script setup>

import { ref } from 'vue'
import picture1 from "~/assets/img/woman.png";
import picture2 from "~/assets/img/project-1.png";
import picture3 from "~/assets/img/project-2.png";


const title = ref('результат');
const images = ref([
  {
    id: 1,
    src: picture1,
  },
  {
    id: 2,
    src: picture2,
  },
  {
    id: 3,
    src: picture3,
  },
])
</script>
<template>
  <section class="result-block">
    <div class="container">
      <h2 class="result-block__title">{{title}}</h2>
      <div class="result-block__images">
        <div v-for="image in images" :key="image.id" class="result-block__img-wrapper">
          <img class="result-block__img" :src="image.src" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.result-block {
  padding-top: 100px;

  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    margin-bottom: 56px;
  }

  &__images{
    display: grid;
    gap: 20px;
  }

  &__img-wrapper{
    position: relative;
    padding-bottom: calc(637/1170*100%);
    overflow: hidden;
  }

  &__img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


}
</style>
