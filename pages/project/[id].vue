<script setup>
import AboutСustomer from "~/components/AboutСustomer.vue";
import CallbackBlock from "~/components/CallBackBlock.vue";
import FrontSingleProject from "~/components/FrontSingleProject.vue";
import ResultBlock from "~/components/ResultBlock.vue";

import Sidebar from "~/components/Sidebar.vue";
import Works from "~/components/Works.vue";
</script>
<template>
  <div class="container-big">
    <div class="section__main">
      <Sidebar class="sidebar" />
      <div>
        <FrontSingleProject/>
        <AboutСustomer/>
        <Works/>
        <ResultBlock/>
        <CallbackBlock link="/" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
