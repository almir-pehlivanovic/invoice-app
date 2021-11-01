<template>
  <div class="bg-gray-50 p-4">
    <Header />
    <div class="max-w-3xl mx-auto">
      <router-view />
    </div>
    <ConfirmModal v-if="confirmModalActive" />
    <transition name="invoice"> 
      <InvoiceModalForm v-if="invoiceModal"/>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from "./components/Header.vue";
import InvoiceModalForm from './components/InvoiceModalForm.vue';
import ConfirmModal from './components/ConfirmModal.vue';

export default {
  components: {
    Header,
    InvoiceModalForm,
    ConfirmModal,
  },
    // get all state from Vuex
  computed:{
    ...mapState(['invoiceModal', 'confirmModalActive']) 
  }
};
</script>

<style scoped>
/* Animate invoice */
.invoice-enter-active,
.invoice-leave-active{
  transition: 0.8s ease all;
}
.invoice-enter-from,
.invoice-leave-to{
  transform: translateX(-910px);
}
</style>