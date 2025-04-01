<script setup>
import logo from "~/assets/img/logo.svg";

import CallBackBtn from "./UI/CallBackBtn.vue";
const navLinks = ref([
  {
    id: 1,
    title: "Услуги",
    link: "/services",
  },
  {
    id: 2,
    title: "Проекты",
    link: "/projects",
  },
  {
    id: 3,
    title: "Принципы",
    link: "/principles",
  },
  {
    id: 4,
    title: "Контакты",
    link: "/contacts",
  },
]);
</script>

<template>
  <header class="header">
    <div class="container-big">
      <div class="header__inner">

        <div class="logo">
          <NuxtLink to="/">
            <img :src="logo" alt="logo" />
          </NuxtLink>
        </div>

        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item" v-for="link in navLinks" :key="link.id">
              <NuxtLink class="menu__link" :to="link.link">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <CallBackBtn link="/">Связаться с нами</CallBackBtn>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
.header {
  padding: 28px 0;
  position: relative;
  z-index: 100;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.menu {
  &__list {
    display: flex;
    align-items: center;
    gap: 52px;
  }

  &__item {
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      right: -28px;
      top: 50%;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #fff;
    }

    &:last-child::after {
      display: none;
    }
  }

  &__link {
    font-family: "Onest";
    font-weight: 500;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #ffffff;
  }
}
</style>

