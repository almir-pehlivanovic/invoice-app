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
        <p class="text-xs">There are {{ invoiceData.length }} total invoices</p>
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
    <div class="mt-9" v-if="invoiceData.length > 0">
      <ul v-if="invoicesLoaded"  class="flex flex-col gap-y-4">
        <Invoice v-for="(invoice, index) in invoiceData" :key="index" :invoice="invoice" />
      </ul>
    </div>
    <div v-else class="-mb-16 mt-9 text-center text-gray-800">
      <img class="max-w-xs mx-auto w-full" src="@/assets/undraw_no_data_re_kwbl.svg" alt="Nothing found">
      <h3 class=" mt-5 text-xl font-semibold">There is nothing here</h3>
      <p>Create a new invoice by clicking the button below and get started</p>
    </div>
    <!-- Add new Invoice button -->
    <div class=" mt-16 mb-8 pt-1 relative flex justify-center left-0 w-full">
      <button @click="newInvoice" class="py-3 w-28 bg-gray-800 flex justify-center rounded-lg">
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import Invoice from '../components/Invoice.vue';

export default {
  components:{
    Invoice,
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
    ...mapState(['invoicesLoaded', 'invoiceData']) 
  }
}
</script>