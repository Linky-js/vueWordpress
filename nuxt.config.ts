// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "vue-yandex-maps/nuxt"],
  yandexMaps: {
    apikey: "0333b546-e4cd-4422-b583-f1193f0144a4",
  },
  css: ["@/assets/css/style.css"],
});
