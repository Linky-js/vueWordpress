<script setup>
import { ref } from "vue";
import title from "~/assets/img/title.svg";
import picture from "~/assets/img/woman.png";

const summary = ref(
  `<p>Создаем современные <strong>музейные проекты <br>и графический дизайн</strong></p><p>с 2011 для государственных организаций и бизнеса</p>`
);
const suptitle = ref("Бюро креативных решений");
</script>

<template>
  <section class="section-1">
    <div class="section-1__top">
      <h2 class="section-1__suptitle">{{ suptitle }}</h2>
      <div class="section-1__summary" v-html="summary"></div>
    </div>
    <img class="section-1__title" :src="title" alt="Пергамент" />
    <img class="section-1__picture" :src="picture" alt="" />
  </section>
</template>

<style lang="scss" scoped>
.section-1 {
  padding-top: 204px;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 15px;
    margin-bottom: 27px;
  }

  &__suptitle {
    font-family: "Gill Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: calc(23/20*100%);
    color: #ffffff;
  }

  &__summary {
    max-width: 192px;
    width: 100%;
    font-family: "Onest";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #7b779d;
    display: grid;
    gap: 20px;
  }

  &__title{
    position: relative;
  }

  &__picture{
    margin-top: -58px;
  }
}
</style>
