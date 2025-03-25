<script setup>
import { ref, watch } from "vue";
import Pergament from "~/components/Pergament.vue";
import Sidebar from "~/components/Sidebar.vue";
import Expertise from "~/components/Expertise.vue";
import Projects from "~/components/Projects.vue";

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
  <div class="container-big">
    <div class="section__main">
      <Sidebar class="sidebar" />
  
      <div class="container">
        <Pergament/>
        <Services/>
        <Expertise/>
        <Projects/>

      </div>
    </div>
  </div>
</template>
<style scoped>.container-big{
  position: relative;
}
.section__main{
  width: 100%;
  display: flex;
  position: relative;
}
.sidebar{
  position: sticky;
  top: 264px;
  left: 0;
}

</style>
