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
  @media (max-width: 991.98px) {
    padding-top: 40px;
  }
  .container {
    margin-left: 0;
  }
  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 50px;

    @media (max-width: 1230px) {
      margin-bottom: 40px;
    }
    @media (max-width: 991.98px) {
      margin-bottom: 30px;
    }

    @media (max-width: 767.98px) {
      margin-bottom: 20px;
    }
    @media (max-width: 575.98px) {
      margin-bottom: 15px;
    }
  }
}
</style>
