<script setup>
import FrontProjects from "~/components/FrontProjects.vue";

const { data: projects } = await useAsyncData("projects", () =>
  $fetch(
    "https://pergament.dmgug.ru/wp-json/wp/v2/project?per_page=10&_embed&acf_fields=true"
  )
);

const { data: projectCategories } = await useAsyncData(
  "projectCategories",
  () =>
    $fetch(
      "https://pergament.dmgug.ru/wp-json/wp/v2/project_category?hide_empty=true"
    )
);

</script>

<template>

  <FrontProjects :projects="projects" :categories="projectCategories" />
</template>
