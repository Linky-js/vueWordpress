<script setup>
import { ref, watch, onMounted } from "vue";
import Pergament from "~/components/Pergament.vue";
import Expertise from "~/components/Expertise.vue";
import Projects from "~/components/Projects.vue";
import Clients from "~/components/Clients.vue";
import CallbackBlock from "~/components/CallBackBlock.vue";

const images = ref([]);
const { data: page } = await useAsyncData('homepage', () =>
  $fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/pages/9?acf_fields=true`)
);

const { data: projects } = await useAsyncData('projects', () =>
  $fetch('https://pergament.dmgug.ru/wp-json/wp/v2/project?per_page=4&_embed&acf_fields=true')
);

const clientsArray = ref([]);


async function getImageUrl(id) {
  if (!id) return null;
  try {
    const res = await $fetch(
      `https://pergament.dmgug.ru/wp-json/wp/v2/media/${id}`
    );
    return res.source_url;
  } catch (error) {
    console.error("Ошибка при получении изображения:", error);
    return null;
  }
}

if (page.value?.acf?.klinety?.length) {
  const imageUrls = await Promise.all(
    page.value.acf.klinety.map((client) => getImageUrl(client.kartinka))
  );
  clientsArray.value = imageUrls.filter(Boolean);
  console.log('clientsArray',clientsArray.value);
  
}

const pergamentObject = computed(() =>
  page.value ? {
    suptitle: page.value.acf.tajtl,
    summary: page.value.acf.tekst_o_kompanii
  } : null
);
const servicesLinks = computed(() =>
  page.value ? {
    servicesLinks: page.value.acf.uslugi,
    
  } : null
);
const expertiseObject = computed(() =>
  page.value ? {
    title: page.value.acf.zagolovok,
    subtitle: page.value.acf.fraza
    
  } : null
);

onMounted(() => {
  console.log('homepage',page.value);
});
</script>
<template>
  <div>
    <Pergament :pergamentObject="pergamentObject"  />
    <Services :servicesLinks="servicesLinks" />
    <Expertise :expertiseObject="expertiseObject" />
    <Projects :projects="projects" />
    <Clients :clientsArray="clientsArray" />
    <CallbackBlock btnColor="blue" />
  </div>
</template>
<style scoped>
</style>
