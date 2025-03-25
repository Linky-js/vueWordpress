<script setup>
import logo from "~/assets/img/logo.svg";

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
  <header>
    <div class="container">
      <div class="header__content">
        <div class="logo">
          <NuxtLink to="/">
            <img :src="logo" alt="logo" />
          </NuxtLink>
        </div>
        <nav>
          <ul class="nav_list">
            <li class="nav_item" v-for="link in navLinks" :key="link.id">
              <NuxtLink :to="link.link">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<style scoped>

</style>