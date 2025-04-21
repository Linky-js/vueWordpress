<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "dark",
  },
});
</script>

<template>
  <div class="modal">
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error cumque ipsam et voluptatum, odio qui saepe omnis velit similique ipsa rerum incidunt quasi deleniti aspernatur quaerat fugit iusto eligendi eius.
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .modal{
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);
  }
</style>
