<script setup>
import { ref } from "vue";
import ProjectItems from "~/components/ProjectItems.vue";

const title = ref("Проекты");

</script>

<template>
  <section class="projects">
    <div class="container">
      <h2 class="projects__title">
        {{ title }}
      </h2>
      <ProjectItems />
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
}
</style>
