<script setup>
import { ref } from "vue";


const props = defineProps({
  works: {
    type: Object,
    default: {
      
    }
  }
})
</script>

<template>
  <section class="works">
    <div class="container">
      <div class="works__inner">
        <div class="works__left">
          <h3 class="works__title">задача</h3>
          <p class="works__text">{{ props.works.textLeft }}</p>
        </div>
        <div class="works__right">
          <h3 class="works__title">Что делали</h3>
          <ul class="works__list">
            <li class="works__point" v-for="item in props.works.items" :key="item.id">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.33565 2.2526C8.74843 1.88568 9.3805 1.92286 9.74742 2.33565L17.7474 11.3356C18.0842 11.7145 18.0842 12.2855 17.7474 12.6644L9.74742 21.6644C9.38051 22.0772 8.74843 22.1143 8.33565 21.7474C7.92287 21.3805 7.88569 20.7484 8.2526 20.3356L15.6621 12L8.2526 3.66437C7.88568 3.25159 7.92286 2.61952 8.33565 2.2526Z"
                  fill="#DDABAB"
                />
              </svg>
              <p class="works__text">{{ item.item }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.works {
  padding-top: 100px;
  @media (max-width: 991.98px) {
    padding-top: 40px;
  }
  .container {
    margin-left: 0;
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 15px;
    padding-bottom: 100px;
    border-bottom: 3px solid #e8e8e8;

    @media (max-width: 991.98px) {
      padding-bottom: 40px;
    }

    @media (max-width: 767.98px) {
    flex-direction: column;
    }
  }

  &__left {
    max-width: 321px;
    @media (max-width: 767.98px) {
    max-width: none;
    }
  }

  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 22px;
  }

  &__text {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(22 / 16 * 100%);
    color: #333333;
  }

  &__right {
    max-width: 670px;
    width: 100%;
  }

  &__list {
    display: grid;
    gap: 16px;
  }

  &__point {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
