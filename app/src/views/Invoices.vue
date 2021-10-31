<template>
  <div>
    <div class="mt-9 w-20">
      <router-link :to="{ name: 'Home' }">
        <button class="flex items-center">
          <svg class="h-5 w-5 mr-3 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          Back
        </button>
      </router-link>
    </div>
    <div class="mt-7 flex justify-between items-center">
      <div class="text-gray-800">
        <h2 class="text-xl font-bold">Invoice list</h2>
        <p class="text-xs">There are 7 total invoices</p>
      </div>
      <div class="flex items-center gap-x-6">
        <button>
          <svg class="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </button>
        <button>
          <svg class="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
          </svg>
        </button>
      </div>
    </div>
    <!-- Invoice list, if state of invoicesLoaded is true show data -->
    <div class="mt-9" v-if="invoicesLoaded">
      <ul class="flex flex-col gap-y-4">
        <li class=" flex items-center shadow-md rounded px-2 py-3 justify-between text-gray-800 border border-gray-100 relative">
          <span>#693TW</span>
          <p>John Doe</p>
          <strong class="font-bold">$293.92</strong>
          <div class="flex items-center gap-x-4">
            <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
            <svg class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
        </li>
        <li class=" flex items-center shadow-md rounded px-2 py-3 justify-between text-gray-800 border border-gray-100 relative">
          <span>#693TW</span>
          <p>John Doe</p>
          <strong class="font-bold">$293.92</strong>
          <div class="flex items-center gap-x-4">
            <span class="w-3 h-3 rounded-full bg-gray-400"></span>
            <svg class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
        </li>
        <li class=" flex items-center shadow-md rounded px-2 py-3 justify-between text-gray-800 border border-gray-100 relative">
          <span>#693TW</span>
          <span>John Doe</span>
          <strong class="font-bold">$293.92</strong>
          <div class="flex items-center gap-x-4">
            <span class="w-3 h-3 rounded-full bg-green-700"></span>
            <svg class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
        </li>
        <li class=" flex items-center shadow-md rounded px-2 py-3 justify-between text-gray-800 border border-gray-100 relative">
          <span>#693TW</span>
          <p>John Doe</p>
          <strong class="font-bold">$293.92</strong>
          <div class="flex items-center gap-x-4">
            <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
            <svg class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
        </li>
        <li class=" flex items-center shadow-md rounded px-2 py-3 justify-between text-gray-800 border border-red-500 relative">
          <span>#693TW</span>
          <p>John Doe</p>
          <strong class="font-bold">$293.92</strong>
          <div class="flex items-center gap-x-4">
            <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
            <svg class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="absolute left-0 -bottom-6 text-red-500">
            Due date exceeded
          </span>
        </li>
      </ul>
    </div>
    <!-- Add new Invoice button -->
    <div class=" mt-24 pt-1 relative flex justify-center left-0 w-full">
      <button @click="newInvoice" class="py-3 w-28 bg-gray-800 flex justify-center rounded-lg">
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </button>
    </div>
    <ConfirmModal v-if="confirmModalActive" />
    <transition name="invoice"> 
      <InvoiceModalForm v-if="invoiceModal"/>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions   } from 'vuex';

import InvoiceModalForm from '../components/InvoiceModalForm.vue';
import ConfirmModal from '../components/ConfirmModal.vue';

export default {
  components:{
    InvoiceModalForm,
    ConfirmModal
  },
  created(){
    // first call mapActions and get all data from GET_INVOICES action
    this.GET_INVOICES();
  },
  methods:{
    ...mapMutations(['TOGGLE_INVOICE']),

    ...mapActions(['GET_INVOICES']),

    newInvoice(){
      this.TOGGLE_INVOICE();
    },
  },
  // get all state from Vuex
  computed:{
    ...mapState(['invoiceModal', 'confirmModalActive', 'invoicesLoaded']) 
  }
}
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