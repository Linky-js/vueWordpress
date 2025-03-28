<script setup>
import CallbackBlock from '~/components/CallBackBlock.vue';
import FrontProject from '~/components/FrontProject.vue';
import Sidebar from '~/components/Sidebar.vue';


</script>
<template>
  <div class="container-big">
    <div class="section__main">
      <Sidebar class="sidebar" />
      <div>
        <FrontProject/>
        <CallbackBlock/>
      </div>
    </div>
  </div>
</template>
