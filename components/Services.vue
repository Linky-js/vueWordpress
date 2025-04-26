<script setup>
import { ref, defineProps } from "vue";
import ArrowLink from "./UI/ArrowLink.vue";
import picture from "~/assets/img/services-img.png";

const props = defineProps({
  servicesLinks: {
    type: Array,
    default: [],
  },
});

const title = ref("услуги");

const link = ref({
  title: "показать больше",
  link: "/services",
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
              v-for="link in props.servicesLinks.servicesLinks"
              :key="link.id"
            >
              <NuxtLink class="services__item-link" :to="link.ssylka_na_straniczu">
                <span class="services__item-text">{{ link.nazvanie }}</span>
                <ArrowLink color="orange" />
              </NuxtLink>
            </li>
          </ul>
          <NuxtLink class="services__link" :to="link.link">
            {{ link.title }}
            <ArrowLink color="#262626" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  padding-top: 100px;
  @media (max-width: 991.98px) {
    padding-top: 40px;
  }
  .container {
    margin-left: 0;
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  &__left {
    margin-top: 35px;
    margin-left: 80px;

    @media (max-width: 1230px) {
      margin-left: 40px;
    }
    @media (max-width: 991.98px) {
      margin-left: 0;
    }

    @media (max-width: 767.98px) {
      display: none;
    }
  }

  &__left-block {
    position: relative;
    background: #ecbb86;
    transform: rotate(-17.34deg);
    overflow: hidden;
    width: 306px;
    height: 306px;
    @media (max-width: 1230px) {
      scale: 0.8;
    }
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

    @media (max-width: 1230px) {
      margin-bottom: 40px;
    }
    @media (max-width: 991.98px) {
      margin-bottom: 30px;
    }

    @media (max-width: 767.98px) {
      margin-bottom: 20px;
    }
    @media (max-width: 575.98px) {
      margin-bottom: 15px;
    }
  }

  &__list {
    margin-bottom: 32px;

    @media (max-width: 991.98px) {
      margin-bottom: 25px;
    }

    @media (max-width: 767.98px) {
      margin-bottom: 20px;
    }
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
    .arrow-link {
      rotate: 90deg;
    }

    &:hover {
      .arrow-link {
        rotate: 0deg;
      }
    }
  }
}
</style>
