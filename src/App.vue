<template>
  <div class="bg-gray-50 p-4">
    <Header />
    <div class="max-w-3xl mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>