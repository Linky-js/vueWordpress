<script setup>
import { ref } from "vue";
import Breadcrumbs from "~/components/UI/Breadcrumbs.vue";
import picture from "~/assets/img/woman-princip.png";

const props = defineProps({
  principles: {
    type: Object,
    required: true
  }
})

const breadcrumbs = ref([
  {
    id: 1,
    name: "Главная",
    url: "/",
  },
  {
    id: 2,
    name: "Принципы",
    url: "/projects",
  },
]);
const title = ref("Принципы");
const items = ref([...props.principles.acf.princzipy]);

const numbers = ref([...props.principles.acf.v_czifrah]);

onMounted(() => {
  console.log('principles',props.principles);
  console.log('items',items.value);
  
})
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
            {{ item.zagolovok }}
          </h4>
          <p class="front-principles__item-text">
            {{ item.opisanie }}
          </p>
        </div>
      </div>
      <img class="front-principles__img" :src="props.principles._embedded?.['wp:featuredmedia']?.[0]?.source_url || null" alt="" />
      <div class="front-principles__elems">
        <div
          class="front-principles__elem"
          v-for="number in numbers"
          :key="number.id"
        >
          <p class="front-principles__elem-num">{{ number.czifra }}</p>
          <p class="front-principles__elem-text" v-html="number.tekst"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.front-principles {
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

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 130px;
    margin-bottom: 75px;

    @media (max-width: 1230px) {
      gap: 20px;
      margin-bottom: 50px;
    }

    @media (max-width: 767.98px) {
      margin-bottom: 30px;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    @media (max-width: 767.98px) {
      &:last-child {
        .front-principles__item-title {
          color: #333333;
        }
      }
    }
  }

  &__item-title {
    font-family: "Onest";
    font-weight: 600;
    font-size: 18px;
    line-height: calc(23 / 18 * 100%);
    color: #ffffff;
    margin-bottom: 20px;

    @media (max-width: 767.98px) {
      margin-bottom: 15px;
    }
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

    @media (max-width: 991.98px) {
      margin-bottom: 40px;
    }
    @media (max-width: 767.98px) {
      height: 320px;
    }
  }

  &__elems {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 110px;

    @media (max-width: 1230px) {
      gap: 40px;
    }

    @media (max-width: 991.98px) {
      gap: 12px;
    }
    @media (max-width: 767.98px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px 12px;
    }
  }

  &__elem {
    display: flex;
    gap: 15px;
    align-items: end;
    @media (max-width: 991.98px) {
      gap: 10px;
    }
    @media (max-width: 575.98px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  &__elem-num {
    font-family: "Onest";
    font-weight: 400;
    font-size: 96px;
    line-height: 0.7;
    letter-spacing: -0.05em;
    color: #ecbb86;

    @media (max-width: 1230px) {
      font-size: 72px;
    }

    @media (max-width: 991.98px) {
      font-size: 64px;
    }

    @media (max-width: 575.98px) {
      font-size: 40px;
    }
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
