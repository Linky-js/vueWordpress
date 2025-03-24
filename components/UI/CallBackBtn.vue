<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "dark", // Optional: Set a default color
  },
});
</script>

<template>
  <button class="btn" :class="color">
    Связаться с нами
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.293 5.5L8.14603 8.646L8.85403 9.353L13.207 5L8.85403 0.645996L8.14603 1.354L11.293 4.5H3.14713e-05V5.5H11.293Z"
        fill="white"
      />
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  font-family: 'Onest';
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14 * 100%);
  color: #ffffff;
  border-radius: 100px;
  border: 3px solid #3a3562;
  background-color: transparent;
  transition: all .3s ease;

  &:hover{
    background-color: #3a3562;
  }

  &.light {
    border: 3px solid #e8e8e8;
    padding: 22px;
    color: #333333;

    svg path{
      fill: #262626;
    }
  }
}
</style>
