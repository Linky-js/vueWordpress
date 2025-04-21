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
  <section class="pergament">
    <div class="container">
      <div class="pergament__top">
        <h2 class="pergament__suptitle">{{ suptitle }}</h2>
        <div class="pergament__summary" v-html="summary"></div>
      </div>
      <img class="pergament__title" :src="title" alt="Пергамент" />
      <img class="pergament__picture" :src="picture" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pergament {
  margin-top: -350px;

  @media (max-width: 991.98px) {
    margin-top: 50px;
  }
  .container {
    margin-left: 0;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 15px;
    margin-bottom: 27px;
    @media (max-width: 767.98px) {
      flex-direction: column;
      align-items: start;
      gap: 10px;
      margin-bottom: 20px;
    }
  }

  &__suptitle {
    font-family: "Gill Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: calc(23 / 20 * 100%);
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
    @media (max-width: 767.98px) {
      max-width: none;
      gap: 0;

      br{display: none;}
    }
  }

  &__title {
    position: relative;

    @media (max-width: 991.98px) {
      max-width: 420px;
    }

    @media (max-width: 767.98px) {
      max-width: 350px;
    }
    @media (max-width: 575.98px) {
      max-width: 300px;
    }
  }

  &__picture {
    margin-top: -58px;

    @media (max-width: 991.98px) {
      max-height: 400px;
      object-position: top;
      width: 100%;
    }

    @media (max-width: 575.98px) {
    margin-top: -30px;
    }
  }
}
</style>
