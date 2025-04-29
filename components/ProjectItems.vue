<script setup>
import { computed } from "vue";
import ArrowLink from "./UI/ArrowLink.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  categorySlug: {
    type: String,
    default: "",
  },
});

const projects = computed(() => {
  return props.items.map((project) => {
    let imageUrl = project._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
    let categories = (project._embedded?.['wp:term']?.[0] || []).map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
    }));

    return {
      ...project,
      imageUrl,
      categories,
    };
  });
});

const link = {
  title: "больше проектов",
  link: "/projects",
};
</script>

<template>
  <div>
    <div class="projects__items">
      <div class="projects__item" v-for="project in projects" :key="project.id">
        <NuxtLink
          class="projects__item-wrapper"
          :to="'/project/' + project.slug"
        >
          <img
            class="projects__item-img"
            :src="project.imageUrl"
            :alt="project.title.rendered"
          />
          <ArrowLink color="orange" />
        </NuxtLink>
        <div class="projects__item-info">
          <h4 class="projects__item-title">{{ project.title.rendered }}</h4>
          <ul class="projects__item-list">
            <li v-for="tag in project.categories" :key="tag.id" class="projects__item-point">
              <NuxtLink :to="'/project-category/' + tag.slug" class="projects__item-link">
                {{ tag.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <NuxtLink v-if="route.path !== '/projects'" class="projects__link" :to="link.link">
      {{ link.title }}
      <ArrowLink color="#262626" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  &__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 56px 30px;

    @media (max-width: 991.98px) {
      gap: 25px;
    }

    @media (max-width: 767.98px) {
      gap: 15px;
    }

    @media (max-width: 575.98px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }

  &__item {
    &:nth-child(even) {
      transform: translateY(112px);
      @media (max-width: 991.98px) {
        transform: translateY(56px);
      }
      @media (max-width: 575.98px) {
        transform: translateY(0);
      }
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
        transition: all 0.3s ease-in-out;
        rotate: -45deg;
        opacity: 1;
      }
    }

    .arrow-link {
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
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
    margin-top: 168px;
    margin-left: auto;
    font-family: "Onest";
    font-weight: 500;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #333333;
    @media (max-width: 991.98px) {
      margin-top: 100px;
    }
    @media (max-width: 767.98px) {
      margin-top: 60px;
    }

    @media (max-width: 575.98px) {
      margin-top: 20px;
    }

    .arrow-link {
      rotate: 0deg;
    }

    &:hover {
      .arrow-link {
        rotate: -45deg;
      }
    }
  }
}
.projects__item-arrow,
.projects__item-arrow svg path {
  mix-blend-mode: difference;
  fill: #fff;
}
</style>
