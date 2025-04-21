<script setup>
import { ref } from "vue";
import Breadcrumbs from "~/components/UI/Breadcrumbs.vue";
import picture from "~/assets/img/woman-princip.png";

const breadcrumbs = ref([
  {
    id: 1,
    name: "Главная",
    url: "/",
  },
  {
    id: 2,
    name: "Проекты",
    url: "/projects",
  },
]);
const title = ref("Принципы");
const items = ref([
  {
    id: 1,
    title: "Системный подход",
    text: "Рассматриваем каждый проект как систему. Это позволяет нам исключить хаотичные действия и прийти а нужному результату",
  },
  {
    id: 2,
    title: "Системный подход",
    text: "Рассматриваем каждый проект как систему. Это позволяет нам исключить хаотичные действия и прийти а нужному результату",
  },
  {
    id: 3,
    title: "Системный подход",
    text: "Рассматриваем каждый проект как систему. Это позволяет нам исключить хаотичные действия и прийти а нужному результату",
  },
]);

const numbers = ref([
  {
    id: 1,
    title: 120,
    text: "выполненных<br> проектов",
  },
  {
    id: 2,
    title: 28,
    text: "сотрудников<br> в команде",
  },
  {
    id: 3,
    title: 5,
    text: "городов, где<br> мы находимся",
  },
  {
    id: 4,
    title: 8,
    text: "лет<br> в маркетинге",
  },
]);
</script>

<template>
  <section class="front-principles">
    <div class="container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1 class="front-principles__title">{{ title }}</h1>
      <div class="front-principles__items">
        <div
          class="front-principles__item"
          v-for="item in items"
          :key="item.id"
        >
          <h4 class="front-principles__item-title">
            {{ item.title }}
          </h4>
          <p class="front-principles__item-text">
            {{ item.text }}
          </p>
        </div>
      </div>
      <img class="front-principles__img" :src="picture" alt="" />
      <div class="front-principles__elems">
        <div
          class="front-principles__elem"
          v-for="number in numbers"
          :key="number.id"
        >
          <p class="front-principles__elem-num">{{ number.title }}</p>
          <p class="front-principles__elem-text" v-html="number.text"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.front-principles {
   margin-top: -440px;

     .container{
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
    margin-bottom: 72px;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 130px;
    margin-bottom: 75px;
  }

  &__item-title {
    font-family: "Onest";
    font-weight: 600;
    font-size: 18px;
    line-height: calc(23 / 18 * 100%);
    color: #ffffff;
    margin-bottom: 20px;
  }

  &__item-text {
    font-family: "Onest";
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #8b86ae;
  }

  &__img {
    height: 362px;
    margin-bottom: 100px;
  }

  &__elems {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 110px;
  }

  &__elem {
    display: flex;
    gap: 15px;
    align-items: end;
  }

  &__elem-num {
    font-family: "Onest";
    font-weight: 400;
    font-size: 96px;
    line-height: 0.7;
    letter-spacing: -0.05em;
    color: #ecbb86;
  }

  &__elem-text {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(20 / 16 * 100%);
    color: #333333;
  }
}
</style>
