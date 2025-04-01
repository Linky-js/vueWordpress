<script setup>
import { ref } from "vue";
import Breadcrumbs from "~/components/UI/Breadcrumbs.vue";
import picture from "~/assets/img/single-1.png";

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
  {
    id: 3,
    name: "Квест Затерянный в Петербурге",
    url: "/projects",
  },
]);

const title = ref("Квест «Затерянный в Петербурге»");
const innerTitle = ref("О проекте");
const text = ref([
  "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях.",
  "Это удивительное путешествие, в основе которого лежат реальные исторические события",
]);
const items = ref([
  {
    id: 1,
    title: "вид работ",
    text: "выставка-квест под ключ",
  },
  {
    id: 2,
    title: "работали над проектом",
    text: "март 2022 - декабрь 2023",
  },
  {
    id: 3,
    title: "город",
    text: "Санкт-Петербург",
  },
]);
</script>

<template>
  <section class="front-single">
    <div class="container">
      <Breadcrumbs
        class="front-single__breadcrumbs"
        :breadcrumbs="breadcrumbs"
      />
      <h1 class="front-single__title">{{ title }}</h1>
      <img class="front-single__picture" :src="picture" alt="" />
      <div class="front-single__inner">
        <h2 class="front-single__inner-title">{{ innerTitle }}</h2>
        <div class="front-single__right">
          <div class="front-single__right-info">
            <p
              class="front-single__right-text"
              v-for="secntence in text"
              :key="secntence"
            >
              {{ secntence }}
            </p>
          </div>
        </div>
      </div>
      <div class="front-single__items">
        <div class="front-single__item" v-for="item in items" :key="item.id">
          <h4 class="front-single__item-title">
            {{ item.title }}
          </h4>
          <p class="front-single__item-text">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.front-single {
  margin-top: -550px;

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
    margin-bottom: 56px;
  }

  &__picture {
    max-height: 405px;
    margin-bottom: 70px;
  }
  &__inner {
    padding-bottom: 58px;
    border-bottom: 3px solid #e8e8e8;
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  &__inner-title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #333333;
  }

  &__right {
    max-width: 670px;
    width: 100%;
  }

  &__right-info {
    max-width: 450px;
    display: grid;
    gap: 20px;
  }

  &__right-text {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(22 / 16 * 100%);
    color: #333333;
  }

  &__items {
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 200px;
  }

  &__item-title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #333333;
    margin-bottom: 5px;
  }

  &__item-text {
    font-family: "Onest";
    font-weight: 300;
    font-size: 30px;
    line-height: calc(38 / 30 * 100%);
    color: #2c2f8d;
  }
}
</style>
