<script setup>
import { defineProps } from "vue";
import CallBackBtn from "./UI/CallBackBtn.vue";


const props = defineProps({
  btnColor:{
    type: String,
    default: 'orange'
  }
})

const title = ref('Мы рады работать с ')
const info = ref([
  "компаниями и людьми,<br>",
  "которые вдохновлены своими идеями<br>",
  "и готовы создавать креативные решения",
]);
</script>

<template>
  <section class="callback">
    <div class="container">
      <div class="callback__title">
        <span>{{ title }}</span>
        <p v-for="(str, index) in info" :key="index" v-html="str"></p>
      </div>
      <CallBackBtn :color="btnColor" >Связаться с нами</CallBackBtn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.callback {
  padding: 100px 0;
    .container{
    margin-left: 0;
  }

  &__title {
    font-family: "Onest";
    font-style: normal;
    line-height: 120%;
    letter-spacing: -0.05em;
    margin-bottom: 62px;

    p {
      font-weight: 700;
      font-size: 38px;
      line-height: 120%;
      text-transform: uppercase;
      color: #333333;


      &:nth-child(2) {
        display: inline-block;
      }
      &:nth-child(3) {
        margin-left: 180px;
      }
    }
    span {
      font-weight: 400;
      font-size: 38px;
      color: #a1a1a1;
    }
  }

}
</style>
