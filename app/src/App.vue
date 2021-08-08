<template>
  <div class="bg-gray-50 h-screen p-4">
    <Header />
    <div class="h-screen max-w-3xl mx-auto relative">
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