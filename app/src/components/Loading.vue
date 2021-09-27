<template>
  <div
    class="
      bg-gray-900
      fixed
      flex
      inset-0
      items-center
      justify-center
      opacity-60
      sm:max-w-2xl
      z-20
    "
  >
    <span
      class="animate-spin block border-2 border-white h-16 rounded-full w-16"
    ></span>
  </div>
</template>

<script>
export default {
  name: "loading",
};
</script>
<style scoped>
span {
  border-left-color: transparent;
  border-right-color: transparent;
}
</style>
