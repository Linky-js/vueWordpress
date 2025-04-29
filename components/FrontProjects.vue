<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import CallbackBlock from "~/components/CallBackBlock.vue";
import Breadcrumbs from "~/components/UI/Breadcrumbs.vue";
import ProjectItems from "~/components/ProjectItems.vue";

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
  categorySlug: {
    type: String,
    default: "",
  },
  categories: {
    type: Array,
    default: [],
  },
});

const router = useRouter();
const route = useRoute();

const items = ref([...props.projects]);
const page = ref(1);
const loading = ref(false);
const allLoaded = ref(false);
const totalProjects = ref(0);
const totalPages = ref(0);
const initialPage = ref(parseInt(route.query.page) || 1);
const isInitialLoad = ref(true);
const perPage = 10;


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

const fetchTotalProjects = async () => {
  const url = `https://pergament.dmgug.ru/wp-json/wp/v2/project?per_page=1&_embed&acf_fields=true${
    props.categorySlug ? `&project-category_slug=${props.categorySlug}` : ""
  }`;

  const response = await fetch(url, { method: "HEAD" });

  const total = parseInt(response.headers.get("x-wp-total"));
  totalProjects.value = total;
  totalPages.value = Math.ceil(total / perPage);

  console.log("totalProjects", totalProjects.value);
  console.log("totalPages", totalPages.value);
};

const loadMoreProjects = async (skipUpdateRoute = false) => {
  if (loading.value || allLoaded.value) return;
  loading.value = true;
  page.value++;
  if (totalPages.value < page.value) {
    loading.value = false;
    allLoaded.value = true;
    return;
  }
  const categoryFilter = props.categorySlug
    ? `&project-category_slug=${props.categorySlug}`
    : "";

  const newProjects = await $fetch(
    `https://pergament.dmgug.ru/wp-json/wp/v2/project?per_page=${perPage}&page=${page.value}${categoryFilter}&_embed&acf_fields=true`
  );

  if (newProjects.length > 0) {
    items.value.push(...newProjects);
    if (!skipUpdateRoute) {
      router.replace({
        path: route.path,
        query: { ...route.query, page: page.value },
      });
    }
  } else {
    allLoaded.value = true;
  }
  loading.value = false;
};
const scrollToProject = (index) => {
  const elements = document.querySelectorAll(".project-item"); // допустим, у тебя есть класс на каждом проекте
  if (elements[index]) {
    elements[index].scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
const handleScroll = () => {
  const scrollBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
  if (scrollBottom) {
    loadMoreProjects();
  }
};
onMounted(async () => {
  await fetchTotalProjects();
    console.log('categories', props.categories);
    
  if (initialPage.value > totalPages.value) {
    initialPage.value = totalPages.value;
    router.replace({
      path: route.path,
      query: { ...route.query, page: initialPage.value },
    });
  }

  for (let p = 2; p <= initialPage.value; p++) {
    await loadMoreProjects(true); // передадим флаг, чтобы в этот момент не менять URL
  }

  // после подгрузки всех нужных проектов — проскроллим
  scrollToProject((initialPage.value - 1) * perPage);

  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>
<template>
  <div>
    <section class="front-project">
      <div class="container">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
        <h1 class="front-project__title">{{ title }}</h1>
        <div class="front-project__tabs">
            <NuxtLink
            :to="'/projects'"
            class="front-project__tab-btn"
            :class="{ active: !categorySlug }"
          >
            Все проекты
          </NuxtLink>
          <NuxtLink
            v-for="tab in props.categories"
            :key="tab.id"
            :to="tab.slug ? `/projects/${tab.slug}` : '/projects'"
            class="front-project__tab-btn"
            :class="{ active: tab.slug === categorySlug }"
          >
            {{ tab.name }}
            <div class="front-project__tab-line"></div>
          </NuxtLink>
        </div>
        <ProjectItems :items="items" />

        <div v-if="loading" class="loader">Загружаем ещё проекты...</div>
      </div>
    </section>
    <CallbackBlock btnColor="slime" />
  </div>
</template>
<style lang="scss" scoped>
.front-project {
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
    margin-bottom: 53px;

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

  &__tabs {
    display: flex;
    gap: 24px;
    margin-bottom: 68px;

    @media (max-width: 767.98px) {
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 40px;
    }
    @media (max-width: 575.98px) {
      margin-bottom: 30px;
    }
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
      .front-project__tab-line {
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
    transition: all 0.3s linear;
  }
}
</style>