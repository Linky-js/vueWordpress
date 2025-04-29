<script setup>
import { ref } from "vue";
import Breadcrumbs from "~/components/UI/Breadcrumbs.vue";
import picture from "~/assets/img/single-1.png";

const props = defineProps({
  frontSingleProject: {
    type: Object,
    default: {
      
    }
  }
})

onMounted(() => {
  console.log('prop',props.frontSingleProject);
})
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

const innerTitle = ref("О проекте");
const imageUrl = ref(null);

</script>

<template>
  <section class="front-single">
    <div class="container">
      <Breadcrumbs
        class="front-single__breadcrumbs"
        :breadcrumbs="breadcrumbs"
      />
      <h1 class="front-single__title">{{ props.frontSingleProject.title }}</h1>
      <img class="front-single__picture" :src="props.frontSingleProject.image" alt="" />
      <div class="front-single__inner">
        <h2 class="front-single__inner-title">{{ innerTitle }}</h2>
        <div class="front-single__right">
          <div class="front-single__right-info">
            <p
              class="front-single__right-text"
            >
              {{ props.frontSingleProject.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="front-single__items">
        <div class="front-single__item" v-for="item in props.frontSingleProject.items" :key="item.id">
          <h4 class="front-single__item-title">
            {{ item.lejbl }}
          </h4>
          <p class="front-single__item-text">
            {{ item.opisanie }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.front-single {
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
    margin-bottom: 56px;

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

  &__picture {
    max-height: 405px;
    margin-bottom: 70px;

    @media (max-width: 767.98px) {
      margin-bottom: 40px;
    }
    @media (max-width: 575.98px) {
    height: 250px;
    }
  }
  &__inner {
    padding-bottom: 58px;
    border-bottom: 3px solid #e8e8e8;
    display: flex;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 767.98px) {
      flex-direction: column;
      gap: 20px;
      padding-bottom: 40px;
    }
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

    @media (max-width: 991.98px) {
      max-width: 540px;
    }
    @media (max-width: 767.98px) {
      max-width: none;
    }
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

    @media (max-width: 1230px) {
      gap: 80px;
    }
    @media (max-width: 767.98px) {
    margin-top: 40px;
    gap: 20px;
    }

    @media (max-width: 575.98px) {
    grid-template-columns: repeat(1, 1fr);

    }
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

    @media (max-width: 991.98px) {
      font-size: 24px;
    }

    @media (max-width: 767.98px) {
    font-size: 22px;
    }
  }
}
</style>
