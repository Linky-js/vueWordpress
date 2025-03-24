<script setup>
import { ref, watch } from "vue";

const images = ref([]);
const { data: page } = useFetch(
  `https://pergament.dmgug.ru/wp-json/wp/v2/pages/9?acf_fields=true`
);
watch(
  page,
  () => {
    console.log(page.value);
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
    
  </div>
</template>
<style scoped>
</style>