<script setup>
import { ref } from "vue";

const title = ref("наша экспертиза");
const subtitle = ref(
  "В РАЗРАБОТКЕ КОНЦЕПЦИИ, ДИЗАЙНА И ТЕХНИЧЕСКИХ РЕШЕНИЙ ПОМОГАЕТ СОЗДАВАТЬ СОВРЕМЕННЫЕ ПРОЕКТЫ \nИ ОБОГАЩАТЬ КУЛЬТУРНЫЙ КОД СТРАНЫ"
);
</script>

<template>
  <section class="expertise">
    <div class="container">
      <h2 class="expertise__title">{{ title }}</h2>
      <p class="expertise__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.expertise {
  padding-top: 100px;

  &__title {
    font-family: "Onest";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.05em;
    color: #a1a1a1;
  }

  &__subtitle {
    font-family: "Onest";
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 120%;
    letter-spacing: -0.05em;
    color: #333333;
  }
}
</style>
