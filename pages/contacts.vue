<script setup>
import FrontContacts from "~/components/FrontContacts.vue";
import Sidebar from "~/components/Sidebar.vue";
</script>
<template>
  <div class="container-big">
    <div class="section__main">
      <Sidebar class="sidebar" />
      <div>
        <FrontContacts/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>