<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const route = useRoute();

const pathPage = computed(() => route.path); 

const navLinks = ref([
  { id: 1, title: "Главная", link: "/" },
  { id: 2, title: "Услуги", link: "/services" },
  { id: 3, title: "Проекты", link: "/projects" },
  { id: 4, title: "Принципы", link: "/principles" },
  { id: 5, title: "Контакты", link: "/contacts" },
]);
</script>

<template>
  <aside class="aside">
    <nav class="left-menu">
      <ul class="left-menu__list">
        <li class="left-menu__item" v-for="link in navLinks" :key="link.id">
          <NuxtLink
            class="left-menu__link"
            :class="{ active: pathPage === link.link }"
            :to="link.link"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  display: flex;
  align-items: center;
  
  max-width: 62px;
  height: max-content;

  position: sticky;
  top: 264px;
  left: 0;
  z-index: 2;
}

.left-menu {
  height: fit-content;

  &__list {
    display: grid;
    gap: 24px;
  }

  &__link {
    font-family: "Onest";
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    color: #a1a1a1;

    &.active {
      color: #2c2f8d;
    }
  }
}
</style>
