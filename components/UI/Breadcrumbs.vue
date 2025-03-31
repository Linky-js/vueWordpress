<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    requared: true,
  },
});
</script>

<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li
        class="breadcrumbs__item"
        v-for="(item, index) in breadcrumbs"
        :key="item.id"
      >
        <NuxtLink
          v-if="index !== breadcrumbs.length - 1"
          class="breadcrumbs__link"
          :to="item.url"
          >{{ item.name }}</NuxtLink
        >
        <span v-else class="breadcrumbs__link">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    position: relative;

    &::before {
      content: " / ";
      font-family: "Gill Sans";
      font-weight: 400;
      font-size: 13px;
      line-height: calc(15 / 13 * 100%);
      color: #645e8f;
      margin: 0 3px;
      display: inline-block;
    }

    &:first-child::before {
      display: none;
    }
  }

  &__link {
    font-family: "Gill Sans";
    font-weight: 400;
    font-size: 13px;
    line-height: calc(15 / 13 * 100%);
    color: #645e8f;
  }
}
</style>
