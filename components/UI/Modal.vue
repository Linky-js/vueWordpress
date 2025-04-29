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
  <transition class="modalWrapper" name="modal-fade">
    <div class="modal" v-if="show" @click.self="hideDialog">
      <div @click.stop class="modal__content">
        <button @click="hideDialog" class="modal__close">x</button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modalWrapper, .modalWrapper *{
  transition: all 0.3s ease ;
}
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
  align-items: center;

  &__content {
    position: relative;
    background-color: #fff;
    border-radius: 12px;
    min-width: 300px;
    min-height: 50px;
    padding: 20px;
    transform: scale(0.95);
    transition: all 0.3s ease;
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

/* transition effects */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
}

/* content animation */
.modal-fade-enter-active .modal__content {
  transition: all 0.3s ease;
  transform: scale(1);
  opacity: 1;
}

.modal-fade-enter-from .modal__content {
  transform: scale(0.95);
  opacity: 0;
}

.modal-fade-leave-to .modal__content {
  transform: scale(0.95);
  opacity: 0;
}
</style>