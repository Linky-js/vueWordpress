<script setup>
import { ref } from "vue";
import CallBackBtn from "./UI/CallBackBtn.vue";
import ArrowLink from "./UI/ArrowLink.vue";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

const props = defineProps({
  aboutCustomer: {
    type: Object,
    default: {
      
    }
  }
})
const swiperPicList = ref([]);
const logo = ref("");

watch(
  () => props.aboutCustomer.logo,
  async (newVal) => {
    if (!newVal) return;
    const res = await $fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/media/${newVal}`);
    logo.value = res.source_url;
  },
  { immediate: true }
);
watch(
  () => props.aboutCustomer.images,
  async (newVal) => {
    if (!Array.isArray(newVal) || newVal.length === 0) return;

    try {
      const results = await Promise.all(
        newVal.map((id) =>
          $fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/media/${id.foto}`)
        )
      );
      swiperPicList.value = results.map((img) => img.source_url);
    } catch (error) {
      console.error("Ошибка при загрузке изображений:", error);
    }
  },
  { immediate: true }
);
const title = ref("о заказчике");


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
            <img class="about-customer__right-img" :src="logo" alt="" />
            <p class="about-customer__right-descr">{{ props.aboutCustomer.topDescr }}</p>
          </div>
          <div class="about-customer__right-info">
            <p
              class="about-customer__right-text"
              v-html="props.aboutCustomer.infoText"
            >
             
            </p>
          </div>
          <CallBackBtn class="about-customer__right-btn" :link="props.aboutCustomer.ssylka_na_nego"
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

  @media (max-width: 991.98px) {
    padding-top: 40px;
    margin-top: 40px;
  }

    @media (max-width: 479.98px) {
    margin-bottom: 80px;
    }

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

  .container {
    margin-left: 0;
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

    @media (max-width: 991.98px) {
      flex-direction: column;
    }
  }

  &__right {
    max-width: 670px;
    width: 100%;
    @media (max-width: 991.98px) {
      max-width: none;
    }
  }

  &__right-top {
    display: flex;
    align-items: center;
    gap: 37px;
    margin-bottom: 54px;

    @media (max-width: 575.98px) {
      gap: 20px;
      margin-bottom: 30px;
    }
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

    @media (max-width: 575.98px) {
      margin-bottom: 30px;
      gap: 15px;
    }
  }

  &__right-text {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(22 / 16 * 100%);
    color: #e8e7ee;
    max-width: 583px;

    @media (max-width: 991.98px) {
      max-width: none;
    }
  }

  &__right-btn {
    margin-bottom: 39px;
    height: 48px;

    @media (max-width: 575.98px) {
      margin-bottom: 30px;
    }
  }

  &__right-bottom {
    display: flex;
    gap: 28px;
    align-items: end;
    position: absolute;

    @media (max-width: 991.98px) {
      right: 0;
    }
    @media (max-width: 767.98px) {
      right: auto;
      left: 0;
      width: 100%;
      gap: 20px;
    }
  }

  &__swiper {
    max-width: 480px;

    @media (max-width: 479.98px) {
      max-width: none;
    }
  }

  .swiper-navigation {
    position: relative;
    display: flex;
    gap: 10px;
    @media (max-width: 479.98px) {
      position: absolute;
      right: 15px;
      bottom: 15px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: static;
      padding: 18px;

      @media (max-width: 767.98px) {
        padding: 10px;
        background-color: #fff;
      }

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
