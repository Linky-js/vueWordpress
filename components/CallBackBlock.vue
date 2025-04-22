<script setup>
import { defineProps } from "vue";
import CallBackBtn from "./UI/CallBackBtn.vue";
import Modal from "./UI/Modal.vue";


const props = defineProps({
  btnColor: {
    type: String,
    default: "orange",
  },
});

const title = ref("Мы рады работать с ");
const info = ref([
  "компаниями и людьми,<br>",
  "которые вдохновлены своими идеями<br>",
  "и готовы создавать креативные решения",
]);
const modalVisible = ref(false);
function showModal() {
  modalVisible.value = true;
}
</script>

<template>
  <section class="callback">
    <div class="container">
      <div class="callback__title">
        <span>{{ title }}</span>
        <p v-for="(str, index) in info" :key="index" v-html="str"></p>
      </div>
      <CallBackBtn @click.prevent="showModal" :color="btnColor">
        Связаться с нами
      </CallBackBtn>
    </div>
    <Modal v-model:show="modalVisible">
      <CallbackForm />
    </Modal>
  </section>
</template>

<style lang="scss" scoped>
.callback {
  padding: 100px 0;
  @media (max-width: 991.98px) {
    padding: 40px 0;
  }
  .container {
    margin-left: 0;
  }

  &__title {
    font-family: "Onest";
    font-style: normal;
    line-height: 120%;
    letter-spacing: -0.05em;
    margin-bottom: 62px;

    @media (max-width: 1230px) {
      margin-bottom: 40px;
    }
    @media (max-width: 991.98px) {
      margin-bottom: 30px;
    }

    @media (max-width: 767.98px) {
      margin-bottom: 20px;
    }
    @media (max-width: 575.98px) {
      display: inline-block;
      br {
        display: none;
      }
    }

    p {
      font-weight: 700;
      font-size: 38px;
      line-height: 120%;
      text-transform: uppercase;
      color: #333333;

      @media (max-width: 1230px) {
        font-size: 32px;
      }
      @media (max-width: 991.98px) {
        font-size: 28px;
      }
      @media (max-width: 767.98px) {
        font-size: 24px;
      }
      @media (max-width: 575.98px) {
        br {
          display: none;
        }
      }

      &:nth-child(2) {
        display: inline-block;
      }
      &:nth-child(3) {
        margin-left: 180px;
        @media (max-width: 991.98px) {
          margin-left: 100px;
        }
        @media (max-width: 767.98px) {
          margin-left: 40px;
        }
        @media (max-width: 575.98px) {
          margin-left: 0;
        }
      }
    }
    span {
      font-weight: 400;
      font-size: 38px;
      color: #a1a1a1;

      @media (max-width: 1230px) {
        font-size: 32px;
      }
      @media (max-width: 991.98px) {
        font-size: 28px;
      }
      @media (max-width: 767.98px) {
        font-size: 24px;
      }
    }
  }
}
</style>
