<script setup>
import { ref } from "vue";
import ArrowLink from "./UI/ArrowLink.vue";

const services = ref([
  {
    id: 1,
    title: "СОЗДАНИЕ МУЗЕЙНЫХ<br> И ВЫСТАВОЧНЫХ ПРОЕКТОВ",
    items: [
      {
        id: 1,
        title: "Выставки под ключ",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
      {
        id: 2,
        title: "Музейные экспозиции",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
      {
        id: 3,
        title: "Образовательные <br>квесты ",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
      {
        id: 4,
        title: "Дизайн проекты",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
      {
        id: 5,
        title: "Интерактивные решения",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
      {
        id: 6,
        title: "Мультимедийный контент",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
      {
        id: 7,
        title: "Застройка проектов",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
      {
        id: 8,
        title: "Создание сайтов<br> для музеев <br>и выставок",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "ГРАФИЧЕСКИЙ ДИЗАЙН",
    items: [
      {
        id: 1,
        title: "Логотип <br>и фирменный <br>стиль",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
      {
        id: 2,
        title: "Дизайн полиграфии",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
      {
        id: 3,
        title: "Создание иллюстраций",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
      {
        id: 4,
        title: "Многостраничные издания",
        text: "«Затерянный в Петербурге» – это увлекательная игра, во время которой участники узнают о городе, масштабных событиях и выдающихся личностях...",
        link: "/",
      },
    ],
  },
]);
</script>

<template>
  <section class="services-all">
    <div class="container">
      <div class="services-all__inner">
        <div
          class="services-all__block"
          v-for="service in services"
          :key="service.id"
        >
          <h2 class="services-all__title" v-html="service.title"></h2>
          <div class="services-all__items">
            <NuxtLink
              class="services-all__item"
              v-for="item in service.items"
              :key="item.id"
              :to="item.link"
            >
              <h4 class="services-all__item-title" v-html="item.title"></h4>
              <div class="services-all__item-right">
                <p class="services-all__item-text">{{ item.text }}</p>
                <ArrowLink color="#2C2F8D" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services-all {
  padding-top: 220px;
  @media (max-width: 1230px) {
    padding-top: 150px;
  }
  @media (max-width: 991.98px) {
    padding-top: 90px;
  }
  .container {
    margin-left: 0;
  }
  &__inner {
    display: grid;
    gap: 100px;

    @media (max-width: 991.98px) {
      gap: 40px;
    }
  }

  &__block {
    @media (max-width: 991.98px) {
      &:first-child {
        .services-all__title {
          color: #ffffff;
        }
      }
    }
  }

  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 40px;
  }

  &__items {
    display: grid;
    gap: 40px;

    @media (max-width: 991.98px) {
      gap: 30px;
    }
    @media (max-width: 767.98px) {
      gap: 20px;
    }
  }

  &__item {
    padding-bottom: 30px;
    border-bottom: 3px solid #e8e8e8;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 15px;

    @media (max-width: 767.98px) {
      flex-direction: column;
      padding-bottom: 15px;
    }

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

  &__item-title {
    font-family: "Onest";
    font-weight: 600;
    font-size: 22px;
    line-height: calc(28 / 22 * 100%);
    color: #333333;
    @media (max-width: 767.98px) {
      br {
        display: none !important;
      }
    }
  }

  &__item-right {
    max-width: 670px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    @media (max-width: 1230px) {
      max-width: 540px;
    }
    @media (max-width: 991.98px) {
      max-width: 450px;
    }
    @media (max-width: 767.98px) {
      max-width: 670px;
    }
  }

  &__item-text {
    max-width: 410px;
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(22 / 16 * 100%);
    color: #333333;
  }
}
</style>
