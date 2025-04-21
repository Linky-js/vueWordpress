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
</script>
<template>
  <div>
    <FrontServices />
    <ServicesAll />
    <CallbackBlock btnColor="red" />
  </div>
</template>

<style lang="scss" scoped>
.vertical-line {
  transform: translateX(-4px) translateY(-242px);
  height: 111%;
}
</style>
