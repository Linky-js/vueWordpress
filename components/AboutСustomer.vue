<script setup>
import { ref } from "vue";
import CallBackBtn from "./UI/CallBackBtn.vue";
import ArrowLink from "./UI/ArrowLink.vue";
import picture from "~/assets/img/rus-pic.png";
import swiperPic from "~/assets/img/swiper-pic.png";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";

const title = ref("о заказчике");
const topDescr = ref(
  'Исторический парк «Россия – Моя история» – "живой учебник" по истории России и Санкт-Петербурга.'
);
const infoText = ref([
  "Уникальный мультимедийный комплекс представляет всю историю страны с древнейших времен до наших дней при помощи более 900 единиц мультимедийного и интерактивного оборудования.",
  "Знакомство с великими династиями, правившими страной более тысячи лет, легендарными победами, феноменальными прорывами в области культуры и искусства, науки и техники, подлинными героями и трагическими переломами в судьбе нашего народа — позволят посетителям испытать чувство личной причастности к неразрывной и общей истории, в том числе и через почти забытое сегодня чувство благодарности.",
]);

const swiperPicList = ref([swiperPic, swiperPic]);
const modules = [Navigation];
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const prevSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev(); 
  }
};

const nextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const widthClientBefoore = () => {
  let width = window.innerWidth;
  let section = document.querySelector(".about-customer");

  if (section) {
    section.style.setProperty("--before-width", `${width}px`);
  }
};
onMounted(async () => {
  widthClientBefoore();
});
</script>

<template>
  <section class="about-customer">
    <div class="container">
      <div class="about-customer__inner">
        <h2 class="about-customer__title">{{ title }}</h2>
        <div class="about-customer__right">
          <div class="about-customer__right-top">
            <img class="about-customer__right-img" :src="picture" alt="" />
            <p class="about-customer__right-descr">{{ topDescr }}</p>
          </div>
          <div class="about-customer__right-info">
            <p
              class="about-customer__right-text"
              v-for="(text, index) in infoText"
              :key="index"
            >
              {{ text }}
            </p>
          </div>
          <CallBackBtn class="about-customer__right-btn" link="/"
            >Перейти на сайт заказчика</CallBackBtn
          >
          <div class="about-customer__right-bottom">
            <swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="50"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="about-customer__swiper"
            >
              <swiper-slide
                class="about-customer__slide"
                v-for="(pic, index) in swiperPicList"
                :key="index"
              >
                <div class="about-customer__item">
                  <img class="about-customer__item-img" :src="pic" alt="" />
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-navigation">
              <ArrowLink
                color="#262626"
                class="swiper-button-prev"
                @click="prevSlide"
              />
              <ArrowLink
                color="#262626"
                class="swiper-button-next"
                @click="nextSlide"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-customer {
  margin: 100px 0 140px;
  padding: 100px 0 150px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/img/clients-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: var(--before-width, 100%);
    z-index: -1;
  }
  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #ffffff;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 15px;
    position: relative;
  }

  &__right {
    max-width: 670px;
    width: 100%;
  }

  &__right-top {
    display: flex;
    align-items: center;
    gap: 37px;
    margin-bottom: 54px;
  }

  &__right-descr {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(20 / 16 * 100%);
    color: #7b769d;
    max-width: 341px;
  }

  &__right-info {
    display: grid;
    gap: 20px;
    margin-bottom: 39px;
  }

  &__right-text {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(22 / 16 * 100%);
    color: #e8e7ee;
    max-width: 583px;
  }

  &__right-btn {
    margin-bottom: 39px;
    height: 48px;
  }

  &__right-bottom {
    display: flex;
    gap: 28px;
    align-items: end;
    position: absolute;
  }

  &__swiper {
    max-width: 480px;
  }

  .swiper-navigation {
    position: relative;
    display: flex;
    gap: 10px;

    .swiper-button-prev,
    .swiper-button-next {
      position: static;
      padding: 18px;

      &::after {
        display: none;
      }
    }
  }

  .swiper-button-prev {
    rotate: 180deg;
  }
}
</style>
