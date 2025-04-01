<script setup>
import CallbackBlock from '~/components/CallBackBlock.vue';
import Clients from '~/components/Clients.vue';
import FrontPrinciples from '~/components/FrontPrinciples.vue';
import Sidebar from '~/components/Sidebar.vue';


</script>
<template>
  <div class="container-big">
    <div class="section__main">
      <Sidebar class="sidebar" />
      <div>
        <FrontPrinciples/>
        <Clients/>
        <CallbackBlock link="/"/>
      </div>
    </div>
  </div>
</template>

