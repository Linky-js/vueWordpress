<script setup>
import { ref } from "vue";
import Breadcrumbs from "~/components/UI/Breadcrumbs.vue";

const breadcrumbs = ref([
  {
    id: 1,
    name: "Главная",
    url: "/",
  },
  {
    id: 2,
    name: "Услуги",
    url: "/projects",
  },
]);
const title = ref("Услуги");
</script>

<template>
  <section class="front-services">
    <div class="container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1 class="front-services__title">{{ title }}</h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.front-services {
  margin-top: -600px;

  &__breadcrumbs {
    margin-bottom: 5px;
  }

  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #ffffff;
  }
}
</style>
