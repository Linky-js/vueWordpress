<script setup>
import { defineProps, defineEmits } from "vue";
const emit = defineEmits();
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

function hideDialog() {
  emit("update:show", false);
}
</script>

<template>
  <div class="modal" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="modal__content">
      <button @click="hideDialog" class="modal__close">x</button>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;

  &__content {
    position: relative;
    margin: auto;
    background-color: #fff;
    border-radius: 12px;
    min-width: 300px;
    min-height: 50px;
    padding: 20px;
    @media (max-width: 575.98px) {
    padding-top: 40px;
    }
  }

  &__close {
    position: absolute;
    top: -30px;
    right: -30px;
    background-color: transparent;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #191631;
    background-color: #fff;
    
    @media (max-width: 575.98px) {
      top: 10px;
      right: 10px;
      color: #fff;
      background-color: #191631;
    }
  }
}
</style>
