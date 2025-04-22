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
  margin-top: -440px;

  @media (max-width: 991.98px) {
    margin-top: 50px;
  }
  .container {
    margin-left: 0;
  }

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

    @media (max-width: 991.98px) {
      font-size: 44px;
    }
    @media (max-width: 767.98px) {
      font-size: 38px;
    }
    @media (max-width: 575.98px) {
      font-size: 32px;
    }
  }
}
</style>
