<script setup>
import { ref, onMounted } from "vue";
import picture1 from "~/assets/img/clients-1.png";
import picture2 from "~/assets/img/clients-2.png";
import picture3 from "~/assets/img/clients-3.png";
import picture4 from "~/assets/img/clients-4.png";
import picture5 from "~/assets/img/clients-5.png";
import picture6 from "~/assets/img/clients-6.png";
import picture7 from "~/assets/img/clients-7.png";
import picture8 from "~/assets/img/clients-8.png";
import picture9 from "~/assets/img/clients-9.png";
import picture10 from "~/assets/img/clients-10.png";
import picture11 from "~/assets/img/clients-11.png";
import picture12 from "~/assets/img/clients-12.png";
import picture13 from "~/assets/img/clients-13.png";

const title = ref("Клиенты");
const subtitle = ref(
  "С благодарностью к тем, <br>кто доверил нам свои проекты"
);
const items = ref([
  {
    id: 1,
    src: picture1,
  },
  {
    id: 2,
    src: picture2,
  },
  {
    id: 3,
    src: picture3,
  },
  {
    id: 4,
    src: picture4,
  },
  {
    id: 5,
    src: picture5,
  },
  {
    id: 6,
    src: picture6,
  },
  {
    id: 7,
    src: picture7,
  },
  {
    id: 8,
    src: picture8,
  },
  {
    id: 9,
    src: picture9,
  },
  {
    id: 10,
    src: picture10,
  },
  {
    id: 11,
    src: picture11,
  },
  {
    id: 12,
    src: picture12,
  },
  {
    id: 13,
    src: picture13,
  },
]);

const widthClientBefoore = () => {
  let width = window.innerWidth;
  let clients = document.querySelector(".clients");

  if (clients) {
    let beforeClients = window.getComputedStyle(clients, "::before");
    // console.log(width, beforeClients);

    clients.style.setProperty("--before-width", `${width}px`);
  }
};

// async function postNewFetch() {
//   let url =
//     "https://api.xn--b1agnepfhjfgc3i.fun/web/index.php?r=api-theme/post-list";
//   let params = {
//     name: "Роман",
//     tel: "+7 (999) 999-99-99",
//     text: "У меня есть вопрос",
//   };
//   try {
//     await fetch(
//       url,
//       {
//         method: "POST",
//         body: JSON.stringify(params),
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Bearer: "123132132165456465",
//         },
//       }
//     )
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// }

onMounted(async () => {
  widthClientBefoore();
  // await postNewFetch();
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
            <div class="clients__item" v-for="item in items" :key="item.id">
              <img class="clients__item-img" :src="item.src" :alt="item.id" />
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

  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/img/clients-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: var(--before-width, 100%);
    z-index: -1;
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
  }

  &__right {
    max-width: 670px;
    width: 100%;
  }

  &__subtitle {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(20 / 16 * 100%);
    color: #7b769d;
    margin-bottom: 50px;
  }

  &__items {
    max-width: 582px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
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
