<script setup>
import { ref } from "vue";
import ArrowLink from "./UI/ArrowLink.vue";
import picture1 from "~/assets/img/project-1.png"
import picture2 from "~/assets/img/project-2.png"
import picture3 from "~/assets/img/project-3.png"
import picture4 from "~/assets/img/project-4.png"

const title = ref("Проекты");
const projects = ref([
  {
    id: 1,
    title: "Международный фестиваль театров",
    img: picture1,
    link: "/",
    tags: [
      {
        id: 1,
        title: "выставки",
        link: "/",
      },
      {
        id: 2,
        title: "музеи",
        link: "/",
      },
      {
        id: 3,
        title: "дизайн",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Разработка бренда для ЖК «Лесart»",
    img: picture2,
    link: "/",
    tags: [
      {
        id: 1,
        title: "бренд",
        link: "/",
      },
      {
        id: 2,
        title: "дизайн",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Интерактивная программа «Вслед за Владимиром»",
    img: picture3,
    link: "/",
    tags: [
      {
        id: 1,
        title: "выставки",
        link: "/",
      },
      {
        id: 2,
        title: "музеи",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Visual Identity for residential complex",
    img: picture4,
    link: "/",
    tags: [
      {
        id: 1,
        title: "айдентика",
        link: "/",
      },
      {
        id: 2,
        title: "бренд",
        link: "/",
      },
      {
        id: 3,
        title: "дизайн",
        link: "/",
      },
    ],
  },
]);
const link = ref({
  title: 'больше проектов',
  link: '/'
})
</script>

<template>
  <section class="projects">
    <div class="container">
      <h2 class="projects__title">
{{ title }}
      </h2>
      <div class="projects__items">
        <div class="projects__item" v-for="(project, index) in projects" :key="project.id">
          <NuxtLink class="projects__item-wrapper" :to="project.link">
            <img class="projects__item-img" :src="project.img" :alt="project.title">
            <ArrowLink />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
