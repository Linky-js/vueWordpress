<script setup>
import { useRoute } from "vue-router";

import HeaderBlock from "~/components/HeaderBlock.vue";
import FooterBlock from "~/components/FooterBlock.vue";

const route = useRoute();
const pathPage = computed(() => route.path);
const isServicePage = ref(false);
const btnColor = ref("orange");

watch(pathPage, (newPath) => {
  isServicePage.value = newPath === "/services";
  if (newPath === "/" || newPath === "/principles") {
    btnColor.value = "orange";
  } else if (newPath === "/projects") {
    btnColor.value = "slime";
  } else if (newPath === "/contacts") {
    btnColor.value = "pink";
  } else if (newPath === "/services") {
    btnColor.value = "red";
  } else {
    btnColor.value = "slime";
  }
});
</script>
<template>
  <Head>
    <Title>Пергамент - бюро креативных решений</Title>
    <Meta name="description" content="Магазин выставок" />
    <Meta name="yandex-verification" content="e490c6f4b37e1903" />
    <Meta
      name="google-site-verification"
      content="FNh4WtLjLHTiTomFdGINF_a52SB5CrTD0Uo-8xbUWV0"
    />
  </Head>
  <HeaderBlock :btnColor="btnColor" />
  <div class="block__header"></div>
  <div class="container-big">
    <div class="section__main">
      <div class="container vertical-container">
        <hr
          class="vertical-line"
          :class="{ 'vertical-line-top': isServicePage }"
        />
      </div>
      <Sidebar />
      <NuxtPage :btnColor="btnColor" class="section__content" />
    </div>
  </div>
  <FooterBlock />
</template>
<style>
.block__header {
  height: 483px;
  flex-shrink: 0;
  display: block;
  width: 100%;

  @media (max-width: 991.98px) {
    display: none;
  }
}

.container-big {
  position: relative;

  @media (max-width: 991.98px) {
    position: static;
  }
}
.section__main {
  width: 100%;
  display: flex;
  position: relative;
}

.section__content {
  width: 100%;
}

.vertical-container {
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;
}

.vertical-line {
  height: calc(100% + 29px);
  width: 1px;
  background-color: #dbdbdba3;
  transform: translateX(13px) translateY(-29px);

  @media (max-width: 1400px) {
    display: none;
  }
}

.vertical-line-top {
  height: 111%;
  transform: translateX(-4px) translateY(-242px);
}
</style>
