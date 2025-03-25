<script setup>
import { ref } from "vue";
import ArrowLink from "./UI/ArrowLink.vue";
import picture from "~/assets/img/services-img.png";

const title = ref("услуги");
const servicesLinks = ref([
  {
    id: 1,
    title: "Выставки под ключ",
    link: "/",
  },
  {
    id: 2,
    title: "Музейные экспозиции",
    link: "/",
  },
  {
    id: 3,
    title: "Дизайн-проект выставки",
    link: "/",
  },
  {
    id: 4,
    title: "Фирменный стиль для музеев",
    link: "/",
  },
  {
    id: 5,
    title: "Образовательные квесты",
    link: "/",
  },
  {
    id: 6,
    title: "Создание арт-объектов",
    link: "/",
  },
  {
    id: 7,
    title: "Мультимедийный контент",
    link: "/",
  },
]);

const link = ref({
  title: "показать больше",
  link: "/",
});
</script>

<template>
  <section class="services">
    <div class="container">
      <div class="services__inner">
        <div class="services__left">
          <div class="services__left-block">
            <img class="services__left-img" :src="picture" alt="" />
          </div>
        </div>
        <div class="services__right">
          <h2 class="services__title">
            {{ title }}
          </h2>
          <ul class="services__list">
            <li
              class="services__item"
              v-for="link in servicesLinks"
              :key="link.id"
            >
              <NuxtLink class="services__item-link" :to="link.link">
                <span class="services__item-text">{{ link.title }}</span>
                <ArrowLink color="#2C2F8D" />
              </NuxtLink>
            </li>
          </ul>
          <NuxtLink class="services__link" :to="link.link">
            {{ link.title }}
            <ArrowLink color="#262626"  />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  padding-top: 100px;

  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  &__left {
    margin-top: 35px;
    margin-left: 80px;
  }

  &__left-block {
    position: relative;
    background: #ecbb86;
    transform: rotate(-17.34deg);
    overflow: hidden;
    width: 306px;
    height: 306px;
  }

  &__left-img {
    position: absolute;
    transform: rotate(17.34deg);
    min-width: 519px;
    height: 332px;
  }

  &__right {
    max-width: 670px;
    width: 100%;
  }

  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 50px;
  }

  &__list {
    margin-bottom: 32px;
  }

  &__item {
    border-bottom: 1px solid #000000;
    padding: 2px 0;
    overflow: hidden;

    &:hover {
      .arrow-link {
        opacity: 1;
        scale: 1;
        transform: translateX(0);
      }
    }
    .arrow-link {
      transform: translateX(100px);
      scale: 0.2;
      opacity: 0;
    }
  }

  &__item-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    font-family: "Onest";
    font-weight: 600;
    font-size: 18px;
    line-height: calc(23 / 18 * 100%);
    color: #333333;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: 191px;
    margin-left: auto;
    font-family: "Onest";
    font-weight: 500;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #333333;
    .arrow-link{
      rotate: 90deg;
    }

    &:hover{
      .arrow-link{
        rotate: 0deg;
      }
    }
  }
}
</style>
