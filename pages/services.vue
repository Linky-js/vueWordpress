<script setup>
import CallbackBlock from "~/components/CallBackBlock.vue";
import FrontServices from "~/components/FrontServices.vue";
import ServicesAll from "~/components/ServicesAll.vue";

// Функция для изменения фона
const setBodyBackground = (size = "100% 559px") => {
  document.body.style.backgroundSize = size;
};

onMounted(() => {
  setBodyBackground("100% 350px");
});

onBeforeUnmount(() => {
  setBodyBackground();
});

const { data: services } = await useAsyncData('services', () =>
  $fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/pages/137?_embed&acf_fields=true`)
);
</script>
<template>
  <div>
    <FrontServices />
    <ServicesAll :services="services"/>
    <CallbackBlock btnColor="red" />
  </div>
</template>

<style lang="scss" scoped>
</style>
