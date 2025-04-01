<script setup>
import CallbackBlock from '~/components/CallBackBlock.vue';
import FrontServices from '~/components/FrontServices.vue';
import ServicesAll from '~/components/ServicesAll.vue';
import Sidebar from '~/components/Sidebar.vue';

// Функция для изменения фона
const setBodyBackground = (size = '100% 559px') => {
  document.body.style.backgroundSize = size; 
};

onMounted(() => {
  setBodyBackground('100% 350px')
});

onBeforeUnmount(() => {
  setBodyBackground(); 
});

</script>
<template>
  <div class="container-big">
    <div class="section__main">
      <Sidebar class="sidebar" />
      <div>
        <FrontServices/>
        <ServicesAll/>
        <CallbackBlock link="/"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body{
  background-size: 100% 350px;
}
</style>

