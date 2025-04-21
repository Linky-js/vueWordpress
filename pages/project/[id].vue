<script setup>
import AboutСustomer from "~/components/AboutСustomer.vue";
import CallbackBlock from "~/components/CallBackBlock.vue";
import FrontSingleProject from "~/components/FrontSingleProject.vue";
import ResultBlock from "~/components/ResultBlock.vue";

import Works from "~/components/Works.vue";
</script>
<template>
  <div>
    <FrontSingleProject />
    <AboutСustomer />
    <Works />
    <ResultBlock />
    <CallbackBlock btnColor="slime" />
  </div>
</template>
<style lang="scss" scoped></style>
