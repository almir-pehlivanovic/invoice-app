<template>
  <div class="-mt-28">
    <div
      class="
        absolute
        font-bold
        inset-y-1/2
        left-0
        text-4xl text-center text-gray-800
        w-full
      "
    >
      <h1 class="-mt-4 drop-shadow-md">invoice</h1>
    </div>
    <div class="absolute bottom-36 left-0 px-8 w-full">
      <router-link :to="{name: 'Invoices'}">
        <button
          class="
            bg-gray-800
            py-3
            rounded-lg
            shadow-md
            text-base text-white
            w-full
          "
        >
          Get Started
        </button>
      </router-link>
    </div>
    <footer
      class="absolute bottom-4 left-0 text-center text-gray-800 text-xs w-full"
    >
      <p>&copy; 2021, Design & Development by Almir Pehlivanović</p>
      <p>All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
