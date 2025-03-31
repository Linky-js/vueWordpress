<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const title = ref("наша экспертиза");
const subtitle = ref(
  "В РАЗРАБОТКЕ КОНЦЕПЦИИ, ДИЗАЙНА И ТЕХНИЧЕСКИХ РЕШЕНИЙ ПОМОГАЕТ СОЗДАВАТЬ СОВРЕМЕННЫЕ ПРОЕКТЫ \nИ ОБОГАЩАТЬ КУЛЬТУРНЫЙ КОД СТРАНЫ"
);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  let subtitle = document.querySelector(".expertise__subtitle");
  const words = subtitle.innerText.split(" ");
  subtitle.innerHTML = words
    .map((word) => `<span style="color: #a1a1a1">${word}</span>`)
    .join(" ");

  const spans = subtitle.querySelectorAll("span");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".expertise .container",
      start: "top bottom-=200",
      end: "top center-=100",
      scrub: 1.5,
    },
  });

  spans.forEach((span) => {
    if (span === spans[spans.length - 1]) {
      tl.to(span, { color: "#333", duration: 1, ease: "none" });
    } else {
      tl.to(span, { color: "#333", duration: 1, ease: "none" })
    }
  });
});
</script>

<template>
  <section class="expertise">
    <div class="container">
      <h2 class="expertise__title">{{ title }}</h2>
      <p class="expertise__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.expertise {
  padding-top: 100px;

  &__title {
    font-family: "Onest";
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 120%;
    letter-spacing: -0.05em;
    color: #a1a1a1;
  }

  &__subtitle {
    font-family: "Onest";
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 120%;
    letter-spacing: -0.05em;
    color: #333333;
  }
}
</style>
