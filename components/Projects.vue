<script setup>
import { ref } from "vue";
import ArrowLink from "./UI/ArrowLink.vue";
import picture1 from "~/assets/img/project-1.png";
import picture2 from "~/assets/img/project-2.png";
import picture3 from "~/assets/img/project-3.png";
import picture4 from "~/assets/img/project-4.png";

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
    id: 3,
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
  title: "больше проектов",
  link: "/",
});
</script>

<template>
  <section class="projects">
    <div class="container">
      <h2 class="projects__title">
        {{ title }}
      </h2>
      <div class="projects__items">
        <div
          class="projects__item"
          v-for="(project, index) in projects"
          :key="project.id"
        >
          <NuxtLink class="projects__item-wrapper" :to="project.link">
            <img
              class="projects__item-img"
              :src="project.img"
              :alt="project.title"
            />
            <ArrowLink
              :color="(index + 1) % 2 === 1 ? '#ffffff' : '#333333'"
              :borderColor="(index + 1) % 2 === 1 ? '#ffffff66' : '#00000033'"
            />
          </NuxtLink>
          <div class="projects__item-info">
            <h4 class="projects__item-title">
              {{ project.title }}
            </h4>
            <ul class="projects__item-list">
              <li
                class="projects__item-point"
                v-for="tag in project.tags"
                :key="tag.id"
              >
                <NuxtLink class="projects__item-link" :to="tag.link">{{
                  tag.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NuxtLink class="projects__link" :to="link.link">
        {{ link.title }}
        <ArrowLink color="#262626" />
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  padding-top: 100px;

  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 50px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 56px 30px;
    flex-wrap: wrap;
    height: 1116px;
  }

  &__item {
    max-width: 570px;
    width: 100%;
    &:nth-child(3) {
      margin-top: 112px;
    }
  }

  &__item-wrapper {
    position: relative;
    padding-bottom: calc(418 / 570 * 100%);
    display: block;
    overflow: hidden;
    margin-bottom: 14px;

    &:hover {
      img {
        scale: 1.25;
      }

      .arrow-link {
        rotate: -45deg;
      }
    }

    .arrow-link {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  &__item-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.4s ease-in;
  }

  &__item-title {
    font-family: "Onest";
    font-weight: 600;
    font-size: 16px;
    line-height: calc(20 / 16 * 100%);
    color: #333333;
    margin-bottom: 3px;
  }

  &__item-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__item-point {
    position: relative;

    &::after {
      position: absolute;
      content: "|";
      color: #b0b0b0;
      right: -8px;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  &__item-link {
    font-family: "Onest";
    font-weight: 400;
    font-size: 13px;
    line-height: calc(17 / 13 * 100%);
    color: #b0b0b0;
  }

    &__link {
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: 194px;
    margin-left: auto;
    font-family: "Onest";
    font-weight: 500;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #333333;
    .arrow-link{
      rotate: 0deg;
    }

    &:hover{
      .arrow-link{
        rotate: -45deg;
      }
    }
  }
}
</style>
