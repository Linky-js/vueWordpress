<script setup>
import logo from "~/assets/img/logo-2.svg";
import vk from "~/assets/img/vk.svg";
import ok from "~/assets/img/ok.svg";
import youtube from "~/assets/img/youtube.svg";

const navLinks = ref([
  {
    id: 1,
    title: "Услуги",
    link: "/services",
  },
  {
    id: 2,
    title: "Проекты",
    link: "/projects",
  },
  {
    id: 3,
    title: "Принципы",
    link: "/principles",
  },
  {
    id: 4,
    title: "Контакты",
    link: "/contacts",
  },
]);
const address = ref(
  "Запорожская обл. г.о. Мелитополь, пгт. Мирное, ул. Заповедная, д.1"
);
const phone = ref("8 987 654 32 10");
const socials = ref([
  {
    id: 1,
    name: "vk",
    link: "https://vk.com/",
    icon: vk,
  },
  {
    id: 2,
    name: "odnoklassniki",
    link: "https://odnoklassniki.ru",
    icon: ok,
  },
  {
    id: 3,
    name: "youtube",
    link: "https://www.youtube.com/",
    icon: youtube,
  },
]);
const copy = ref("© 2025 ООО «Пергамент»");
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <div class="footer__top-inner">
          <div class="logo">
            <NuxtLink to="/">
              <img :src="logo" alt="logo" />
            </NuxtLink>
          </div>
          <div class="footer__right">
            <nav class="footer__menu">
              <ul class="footer__menu-list">
                <li
                  class="footer__menu-item"
                  v-for="link in navLinks"
                  :key="link.id"
                >
                  <NuxtLink class="footer__menu-link" :to="link.link">
                    {{ link.title }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
            <div class="footer__info">
              <address v-if="address" class="footer__address">
                {{ address }}
              </address>
              <p v-if="phone" class="footer__phone">
                Тел.:
                <NuxtLink class="footer__phone-link" :to="'tel:' + phone">
                  {{ phone }}
                </NuxtLink>
              </p>
              <div class="footer__socials">
                <h6 class="footer__socials-title">Написать нам:</h6>
                <div class="footer__socials-links">
                  <NuxtLink
                    class="footer__socials-link"
                    v-for="soc in socials"
                    :key="soc.id"
                    :to="soc.link"
                  >
                    <img :src="soc.icon" :alt="soc.name" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="footer__bottom-inner">
          <p class="footer__copy">
            {{ copy }}
          </p>
          <div class="footer__bottom-right">
            <NuxtLink class="footer__link" to="/">
              Правовая информация
            </NuxtLink>
            <NuxtLink class="footer__link" to="/">
              Политика конфиденциальности
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid #dbdbdb;

  .container {
    padding: 0 15px;
  }

  &__top {
    padding: 50px 0 42px;

    @media (max-width: 767.98px) {
      padding: 30px 0;
    }
  }

  &__top-inner {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 15px;
    padding-left: 35px;
    @media (max-width: 991.98px) {
      padding-left: 0;
    }
    @media (max-width: 767.98px) {
      flex-direction: column;
    }
  }

  &__right {
    max-width: 670px;
    width: 100%;
    display: flex;
    gap: 180px;

    @media (max-width: 1230px) {
      max-width: 590px;
    }
    @media (max-width: 991.98px) {
      gap: 80px;
      max-width: 450px;
    }
    @media (max-width: 767.98px) {
      max-width: none;
      justify-content: space-between;
    }
    @media (max-width: 479.98px) {
      gap: 40px;
    }
  }

  &__menu-list {
    display: grid;
    gap: 24px;

    @media (max-width: 479.98px) {
      gap: 15px;
    }
  }

  &__menu-link {
    font-family: "Onest";
    font-weight: 500;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #383838;
  }

  &__address {
    font-family: "Onest";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: calc(20 / 16 * 100%);
    color: #333333;
    max-width: 290px;
    margin-bottom: 23px;
    @media (max-width: 479.98px) {
      margin-bottom: 15px;  
    }
  }

  &__phone {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(20 / 16 * 100%);
    color: #333333;
  }

  &__phone-link {
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  &__socials {
    margin-top: 36px;

    @media (max-width: 479.98px) {
      margin-top: 20px;
    }
  }

  &__socials-title {
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: calc(20 / 16 * 100%);
    color: #333333;
    margin-bottom: 10px;
  }

  &__socials-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }

  &__socials-link {
    width: 32px;
    height: 32px;
    border: 0.5px solid #b0b0b0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__bottom {
    padding: 20px 0 25px;
    background-color: #f9f9f9;
  }

  &__bottom-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding-left: 35px;

    @media (max-width: 991.98px) {
      padding-left: 0;
    }
    @media (max-width: 767.98px) {
      flex-direction: column-reverse;
    }
  }

  &__copy {
    font-family: "Onest";
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14 * 100%);
    color: #383838;
  }

  &__bottom-right {
    max-width: 670px;
    width: 100%;
    display: flex;
    gap: 97px;

    @media (max-width: 1230px) {
      max-width: 590px;
    }
    @media (max-width: 991.98px) {
      gap: 80px;
      max-width: 450px;
    }
    @media (max-width: 479.98px) {
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  &__link {
    font-family: "Onest";
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-decoration: underline;
    text-underline-offset: 3px;
    color: #383838;
  }
}
</style>
