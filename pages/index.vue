<script setup>
import { ref, watch } from "vue";
import Pergament from "~/components/Pergament.vue";
import Expertise from "~/components/Expertise.vue";
import Projects from "~/components/Projects.vue";
import Clients from "~/components/Clients.vue";
import CallbackBlock from "~/components/CallBackBlock.vue";

const images = ref([]);
const { data: page } = useFetch(
  `https://pergament.dmgug.ru/wp-json/wp/v2/pages/9?acf_fields=true`
);
watch(
  page,
  () => {
    if (page.value?.acf?.kartinka) {
      getImageUrl(page.value.acf.kartinka);
    }
  },
  { immediate: true }
);

async function getImageUrl(id) {
  if (!id) return null;
  const res = await $fetch(
    `https://pergament.dmgug.ru/wp-json/wp/v2/media/${id}`
  );
  images.value.push(res.source_url);
}
</script>
<template>
  <div>
    <Pergament />
     <Services />
    <Expertise />
    <Projects />
    <Clients />
    <CallbackBlock btnColor="blue" />
  </div>
</template>
<style scoped>

</style>
