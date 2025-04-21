<script setup>
import logo from "~/assets/img/logo.svg";
import { defineProps } from "vue";
import CallBackBtn from "./UI/CallBackBtn.vue";

const props = defineProps({
  btnColor: {
    type: String,
    default: "orange",
  },
});
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
const isActiveMenu = ref(false);
const toggleMenu = () => {
  isActiveMenu.value = !isActiveMenu.value;
};
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

        <nav class="menu" :class="{ active: isActiveMenu }">
          <ul class="menu__list">
            <li class="menu__item" v-for="link in navLinks" :key="link.id">
              <NuxtLink class="menu__link" :to="link.link">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <CallBackBtn class="header__btn" :color="btnColor" link="/">
          <span> Связаться с нами </span>
        </CallBackBtn>
        <button
          @click="toggleMenu"
          :class="{ active: isActiveMenu }"
          class="burger"
        >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 28px 0;
  position: relative;
  z-index: 100;

  @media (max-width: 991.98px) {
    padding: 15px 0;
    position: static;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 991.98px) {
      gap: 20px;
    }
    @media (max-width: 479.98px) {
    gap: 10px;
    }
  }

  &__btn {
    height: 48px;
    padding: 15px !important;

    @media (max-width: 991.98px) {
      margin-left: auto;
      height: 36px;
    }
    @media (max-width: 479.98px) {
      width: 36px;
      padding: 12px !important;
      span {
        display: none;
      }
    }
  }

  &__btn-img {
    display: none;
    opacity: 0;
    scale: 0;
    transition: all 0.3s ease-in-out;
    @media (max-width: 479.98px) {
      display: block;
      opacity: 1;
      scale: 1;
    }
  }
}

.menu {
  @media (max-width: 991.98px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #191631;
    display: flex;
    justify-content: center;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;
    @media (max-width: 479.98px) {
      padding: 0 20px;
    }

    &.active {
      transform: translateX(0%);
    }
  }
  &__list {
    display: flex;
    align-items: center;
    gap: 52px;
    @media (max-width: 991.98px) {
      flex-direction: column;
      max-width: 500px;
      width: 100%;
      align-items: start;
      margin-top: 20%;
      gap: 40px;
    }

    @media (max-width: 479.98px) {
      margin-top: 0;
      justify-content: center;
    }
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
      @media (max-width: 991.98px) {
        display: none;
      }
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
    @media (max-width: 991.98px) {
      font-size: 36px;
    }
  }
}

.burger {
  position: relative;
  z-index: 150;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  padding: 8px;
  display: none;

  @media (max-width: 991.98px) {
    display: flex;
  }

  .line {
    height: 3px;
    width: 100%;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &.active {
    .line:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}
</style>
