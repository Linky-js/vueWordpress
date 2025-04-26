<script setup>
import { ref, onMounted, defineProps } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  expertiseObject: {
    type: Object,
    default: {
      
    },
  },
});

onMounted( async () => {
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
      tl.to(span, { color: "#333", duration: 1, ease: "none" });
    }
  });
});
</script>

<template>
  <section class="expertise">
    <div class="container">
      <h2 class="expertise__title">{{ props.expertiseObject.title }}</h2>
      <p class="expertise__subtitle">{{ props.expertiseObject.subtitle }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.expertise {
  padding-top: 100px;
  @media (max-width: 991.98px) {
    padding-top: 40px;
  }
  .container {
    margin-left: 0;
  }

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
  &__title,
  &__subtitle {
    @media (max-width: 1230px) {
      font-size: 32px;
    }
    @media (max-width: 991.98px) {
      font-size: 28px;
    }
    @media (max-width: 767.98px) {
      font-size: 24px;
    }
  }
}
</style>
