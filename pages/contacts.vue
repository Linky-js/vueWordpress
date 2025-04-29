<script setup>
import { ref } from "vue";
import Breadcrumbs from "~/components/UI/Breadcrumbs.vue";
import map from "~/assets/img/map.png";
import CallBackBtn from "~/components/UI/CallBackBtn.vue";
import Map from "~/components/UI/Map.vue";


const { data: page } = await useAsyncData('contacts', () =>
$fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/pages/121?acf_fields=true`)
);
const breadcrumbs = ref([
  {
    id: 1,
    name: "Главная",
    url: "/",
  },
  {
    id: 2,
    name: "Контакты",
    url: "/contacts",
  },
]);
const title = ref("Контакты");
const subtitle = ref("Звоните, пишите<br> или приезжайте в гости");
const address = computed(() => page.value.acf.ofis);
const whatsapp = computed(() => page.value.acf.whatsapp);
const phone = computed(() => page.value.acf.telefon);
const mail = computed(() => page.value.acf.emejl);
const socials = computed(() => page.value.acf.soczseti);
</script>

<template>
  <section class="front-contacts">
    <div class="container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1 class="front-contacts__title">{{ title }}</h1>
      <p class="front-contacts__subtitle" v-html="subtitle"></p>
      <!-- <img class="front-contacts__map" :src="map" alt="" /> -->
      <Map class="front-contacts__map" />
      <div class="front-contacts__items">
        <div class="front-contacts__item">
          <h4 class="front-contacts__item-title">офис</h4>
          <div class="front-contacts__item-bottom">
            <p class="front-contacts__item-text">{{ address }}</p>
          </div>
        </div>
        <div class="front-contacts__item">
          <h4 class="front-contacts__item-title">whatsapp</h4>
          <div class="front-contacts__item-bottom">
            <NuxtLink
              class="front-contacts__item-text"
              :to="`tel:${whatsapp[1]}`"
              >{{ whatsapp }}</NuxtLink
            >
          </div>
        </div>
        <div class="front-contacts__item">
          <h4 class="front-contacts__item-title">связаться с нами</h4>
          <div class="front-contacts__item-bottom">
            <NuxtLink class="front-contacts__item-text" :to="`mail:${mail}`">{{
              mail
            }}</NuxtLink>
            <NuxtLink class="front-contacts__item-text" :to="`tel:${phone}`">{{
              phone
            }}</NuxtLink>
          </div>
        </div>
        <div class="front-contacts__item">
          <h4 class="front-contacts__item-title">соцсети</h4>
          <div class="front-contacts__item-bottom">
            <NuxtLink
              class="front-contacts__item-text front-contacts__item-soc"
              v-for="soc in socials"
              :key="soc.title"
              :to="soc.ssylka"
              >{{ soc.nazvanie }}</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="front-contacts__bottom">
        <p class="front-contacts__bottom-text">присоединиться к команде</p>
        <CallBackBtn class="front-contacts__bottom-btn" color="pink"
          >Отправить резюме</CallBackBtn
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.front-contacts {
  margin-top: -440px;
  margin-bottom: 100px;

  @media (max-width: 991.98px) {
    margin: 50px 0;
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
    margin-bottom: 72px;

    @media (max-width: 991.98px) {
      font-size: 44px;
    }
    @media (max-width: 767.98px) {
      font-size: 38px;
      margin-bottom: 40px;
    }
    @media (max-width: 575.98px) {
      font-size: 32px;
      margin-bottom: 30px;
    }
  }

  &__subtitle {
    font-family: "Onest";
    font-weight: 600;
    font-size: 18px;
    line-height: calc(23 / 18 * 100%);
    color: #ffffff;
    margin-bottom: 26px;

    @media (max-width: 767.98px) {
    margin-bottom: 15px;
    }
  }

  &__map {
    height: 389px;
    margin-bottom: 56px;

    @media (max-width: 767.98px) {
      height: 320px !important;
      margin-bottom: 30px;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 72px;
    max-width: 924px;
    margin-bottom: 50px;

    @media (max-width: 767.98px) {
    gap: 30px;
    margin-bottom: 30px;
    }

    @media (max-width: 575.98px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    }
  }

  &__item {
    padding-bottom: 15px;
    border-bottom: 1px solid #000000;

    @media (max-width: 575.98px) {
    padding-bottom: 10px;
    }
  }

  &__bottom-text,
  &__item-title {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(20 / 16 * 100%);
    color: #8f8f8f;
    margin-bottom: 10px;
  }

  &__item-bottom {
    display: grid;
    gap: 10px;
  }

  &__item-text {
    font-family: "Onest";
    font-weight: 600;
    font-size: 22px;
    line-height: calc(28 / 22 * 100%);
    color: #333333;

    @media (max-width: 767.98px) {
    font-size: 18px;
    }
  }

  &__item-soc {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}
</style>
