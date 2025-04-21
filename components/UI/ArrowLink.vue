<script setup>
defineProps({
  color: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div
    class="arrow-link" :class="color"
  >
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.793 8L9.64603 11.146L10.354 11.853L14.707 7.5L10.354 3.146L9.64603 3.854L12.793 7H1.50003V8H12.793Z"
        fill="#000"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.arrow-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 59px;
  padding: 10px;
  border-radius: 50%;
  border: 3px solid #e8e8e8;
  transition: all .3s ease-in-out;
  cursor: pointer;

    @media (max-width: 767.98px) {
      width: 45px;
      height: 45px;
    }


  &.orange{
    border: none;
    background-color: #FFB05A;

    svg path{
      fill: #2C2F8D;
    }
  }
}
</style>
