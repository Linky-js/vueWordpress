<script setup>
import AboutСustomer from "~/components/AboutСustomer.vue";
import CallbackBlock from "~/components/CallBackBlock.vue";
import FrontSingleProject from "~/components/FrontSingleProject.vue";
import ResultBlock from "~/components/ResultBlock.vue";
import { useRoute } from "vue-router";
const route = useRoute();
import Works from "~/components/Works.vue";

const { data: projectPage } = await useAsyncData("projectPage", () =>
  $fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/project?slug=${route.params.id}&_embed&acf_fields=true`)
);

const frontSingleProject = computed(() =>
  projectPage.value ? {
    title: projectPage.value[0].title.rendered,
    text: projectPage.value[0].acf.o_proekte,
    items: projectPage.value[0].acf.vidy_rabot,
    image: projectPage.value[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
  } : {}
);

const aboutCustomer = computed(() =>
  projectPage.value ? {
    logo: projectPage.value[0].acf.logo,
    topDescr: projectPage.value[0].acf.kratko_o_nem,
    images: projectPage.value[0].acf.galereya,
    infoText: projectPage.value[0].acf.mnogo_o_nem,
    ssylka_na_nego: projectPage.value[0].acf.ssylka_na_nego
  } : {}
);

const works = computed(() =>
  projectPage.value ? {
    textLeft: projectPage.value[0].acf.zadacha,
    items: projectPage.value[0].acf.chto_delali,
  } : {}
);

const result = computed(() =>
  projectPage.value ? {
    images: projectPage.value[0].acf.rezultat,
  } : {}  
);

onMounted(() => {
  console.log('frontSingleProject',projectPage.value);
})
</script>
<template>
  <div>
    <FrontSingleProject :frontSingleProject="frontSingleProject" />
    <AboutСustomer :aboutCustomer="aboutCustomer" />
    <Works :works="works" />
    <ResultBlock :result="result" />
    <CallbackBlock btnColor="slime" />
  </div>
</template>
<style lang="scss" scoped></style>
