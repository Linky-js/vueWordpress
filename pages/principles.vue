<script setup>
import CallbackBlock from '~/components/CallBackBlock.vue';
import Clients from '~/components/Clients.vue';
import FrontPrinciples from '~/components/FrontPrinciples.vue';

const clientsArray = ref([]);
const { data: principles } = await useAsyncData('principles', () =>
  $fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/pages/86?_embed&acf_fields=true`)
);
const { data: page } = await useAsyncData('homepage', () =>
  $fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/pages/9?acf_fields=true`)
);

if (page.value?.acf?.klinety?.length) {
  const imageUrls = await Promise.all(
    page.value.acf.klinety.map((client) => getImageUrl(client.kartinka))
  );
  clientsArray.value = imageUrls.filter(Boolean);
}

async function getImageUrl(id) {
  if (!id) return null;
  const res = await $fetch(`https://pergament.dmgug.ru/wp-json/wp/v2/media/${id}`);
  return res.source_url;
}
</script>
<template>
      <div>
        <FrontPrinciples :principles="principles"/>
        <Clients :clientsArray="clientsArray"/>
        <CallbackBlock btnColor="blue"/>
      </div>
</template>

