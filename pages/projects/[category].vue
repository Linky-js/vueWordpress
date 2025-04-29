<script setup>
import { useRoute, useRouter } from 'vue-router';
import FrontProjects from '~/components/FrontProjects.vue';

const route = useRoute();
const router = useRouter();
const categorySlug = route.params.category;

const { data: projectCategories } = await useAsyncData('projectCategories', () =>
  $fetch('https://pergament.dmgug.ru/wp-json/wp/v2/project_category?hide_empty=true')
);

const currentCategory = computed(() => {
  return projectCategories.value?.find(cat => cat.slug === categorySlug);
});

const { data: projects } = await useAsyncData(`projects-${categorySlug}`, () => {
  if (!currentCategory.value) {
    return [];
  }
  return $fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/project?project_category=${currentCategory.value.id}&per_page=10&_embed&acf_fields=true`);
});
</script>

<template>
  <div>
    <FrontProjects
      :projects="projects || []"
      :categorySlug="categorySlug"
      :categories="projectCategories || []"
    />
  </div>
</template>