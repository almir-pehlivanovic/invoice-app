<template>
  <div class="-mt-28">
    <div
      class="
        -mt-16
        -translate-x-1/2 -translate-y-1/2
        absolute
        font-bold
        left-1/2
        text-4xl text-center text-gray-800
        top-1/2
        transform
      "
    >
      <img
        class="mb-6 mx-auto"
        width="69"
        height="88"
        src="@/assets/custom-logo.png"
        alt="Custom logo"
      />
      <h1 class="-mt-4 drop-shadow-md">invoice</h1>
    </div>
    <div class="absolute bottom-36 flex justify-center left-0 px-8 w-full">
      <router-link class="w-full max-w-2xl" :to="{ name: 'Invoices' }">
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
