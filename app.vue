<script setup>
import HeaderBlock from "~/components/HeaderBlock.vue";
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
  <HeaderBlock />
  <div class="block__header"></div>
  <NuxtPage />
</template>
<style scoped>
.block__header {
  height: 483px;
  flex-shrink: 0;
  display: block;
  width: 100%;
}
</style>