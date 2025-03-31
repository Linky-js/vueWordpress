<script setup>
import { ref } from "vue";
import Breadcrumbs from "~/components/UI/Breadcrumbs.vue";
import ProjectItems from "~/components/ProjectItems.vue";

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
const title = ref("Проекты");
const tabs = ref([
  {
    id: 1,
    name: "Все проекты",
  },
  {
    id: 2,
    name: "Выставки",
  },
  {
    id: 3,
    name: "Дизайн",
  },
  {
    id: 4,
    name: "Контент",
  },
  {
    id: 5,
    name: "Застройка",
  },
  {
    id: 6,
    name: "Логотип",
  },
]);
const tabActive = ref(0);
</script>

<template>
  <section class="front-project">
    <div class="container">
      <Breadcrumbs
        class="front-project__breadcrumbs"
        :breadcrumbs="breadcrumbs"
      />
      <h1 class="front-project__title">{{ title }}</h1>
      <div class="front-project__inner">
        <div class="front-project__tabs">
          <a
            class="front-project__tab"
            v-for="(tab, index) in tabs"
            :key="tab.id"
          >
            <div
              class="front-project__tab-btn"
              @click="tabActive = index"
              :class="[
                {
                  active: index === tabActive,
                },
              ]"
            >
              {{ tab.name }}

              <div
                class="front-project__tab-line"
              ></div>
            </div>
          </a>
        </div>
        <ProjectItems/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.front-project {
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
    margin-bottom: 53px;
  }

  &__tabs {
    display: flex;
    gap: 24px;
    margin-bottom: 68px;
  }

  &__tab-btn {
    font-family: "Onest";
    font-weight: 500;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #645e8f;
    position: relative;

    &.active {
      color: #ffffff;
      .front-project__tab-line{
        width: 100%;
      }
    }
  }
  &__tab-line {
    position: absolute;
    display: block;
    bottom: -6px;
    height: 3px;
    background-color: #645e8f;
    width: 0%;
    transition: all .3s linear;
  }
}
</style>
