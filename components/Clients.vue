<script setup>
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  clientsArray: {
    type: Array,
    default: [],
  },
})

const title = ref("Клиенты");
const subtitle = ref(
  "С благодарностью к тем, <br>кто доверил нам свои проекты"
);


const widthClientBefoore = () => {
  let width = window.innerWidth;
  let clients = document.querySelector(".clients");

  if (clients) {
    
    let beforeClients = window.getComputedStyle(clients, "::before");
    
    if (width < 1375) {
      clients.style.setProperty("--before-left", `calc(50% - 0px)`);
      clients.style.setProperty("--before-width", `calc(${width}px + 120px`);
    } else {
      clients.style.setProperty("--before-left", `calc(50%)`);
      clients.style.setProperty("--before-width", `calc(${width}px + 120px`);
    }
  }
};
 
const resizeWindowBlock = (computed)  => {
  window.addEventListener("resize", () => {    
    widthClientBefoore();
  });
}


onMounted(async () => {
  console.log(props.clientsArray);
  
  widthClientBefoore();
  resizeWindowBlock();
});
</script>

<template>
  <section class="clients">
    <div class="container">
      <div class="clients__inner">
        <h2 class="clients__title">
          {{ title }}
        </h2>
        <div class="clients__right">
          <p class="clients__subtitle" v-html="subtitle"></p>
          <div class="clients__items">
            <div class="clients__item" v-for="item in props.clientsArray" :key="item.id">
              <img class="clients__item-img" :src="item" :alt="item.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.clients {
  margin-top: 100px;
  padding: 100px 0;
  position: relative;
  z-index: 1;

  @media (max-width: 991.98px) {
    padding: 40px 0;
    margin-top: 40px;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/img/clients-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    top: 0;
    left: var(--before-left, 50%);
    transform: translateX(-50%);
    height: 100%;
    width: var(--before-width, 100%);
    z-index: -1;
  }
  .container {
    margin-left: 0;
  }

  &__title {
    font-family: "Onest";
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #ffffff;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 15px;

    @media (max-width: 991.98px) {
      flex-direction: column;
    }
  }

  &__right {
    max-width: 670px;
    width: 100%;

    @media (max-width: 991.98px) {
      max-width: none;
    }
  }

  &__subtitle {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(20 / 16 * 100%);
    color: #7b769d;
    margin-bottom: 50px;

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
      margin-bottom: 15px;
    }
  }

  &__items {
    max-width: 582px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 991.98px) {
      margin: 0 auto;
    }

    @media (max-width: 767.98px) {
      justify-content: space-around;
    }
  }

  &__item {
    max-width: 138px;
    width: 100%;
    height: 92px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
