<template>
  <div v-if="currentInvoice">
    <div class="mt-9">
      <router-link :to="{ name: 'Invoices' }">
        <button class="flex items-center">
          <svg class="h-5 w-5 mr-3 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          Back
        </button>
      </router-link>
    </div>
    <div class="flex items-center mt-5 justify-between flex-wrap">
      <div class="flex items-center gap-x-3">
        <div :class="{'bg-green-700': currentInvoice.invoicePaid, 'bg-yellow-500': currentInvoice.invoicePending, 'bg-gray-400': currentInvoice.invoiceDraft }" class="w-3 h-3 rounded-full"></div>
        <p v-if="currentInvoice.invoicePaid" class="text-base text-gray-800">Paid</p>
        <p v-if="currentInvoice.invoicePending" class="text-base text-gray-800">Pending</p>
        <p v-if="currentInvoice.invoiceDraft" class="text-base text-gray-800">Draft</p>
      </div>
      <!-- Delete, Edit, Paid buttons -->
      <div class="flex items-center">
        <button @click="deleteInvoice(currentInvoice.docId)" type="button" class="px-3 py-2">
          <svg class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
        <button @click="toggleEditInvoice(currentInvoice.docId)" type="button" class="px-3 py-2">
          <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
          </svg>
        </button>
        <button v-if="currentInvoice.invoicePending" @click="updateStatusToPaid(currentInvoice.docId)" type="button" class="flex items-center gap-x-2 px-3 py-2 ml-3 text-white rounded-md shadow-lg bg-gray-800">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p>Mark as Paid</p>
        </button>
        <button v-if="currentInvoice.invoiceDraft || currentInvoice.invoicePaid" @click="updateStatusToPending(currentInvoice.docId)" type="button" class="flex items-center gap-x-2 px-3 py-2 ml-3 text-white rounded-md shadow-lg bg-gray-800">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p>Mark as Pending</p>
        </button>

      </div>
    </div>
    <!-- Download button -->
    <div class="mt-8 flex flex-1 justify-end">
      <button class="flex items-center gap-x-2 font-bold text-gray-800">
        <p>Download</p>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      </button>
    </div>
    <!-- Invoice Info -->
    <div class="mt-7">
      <div class="flex justify-between">
        <div class="text-gray-800 flex-1">
          <h2 class="font-semibold text-xl">#{{ currentInvoice.invoiceId.substring(0,5) }}</h2>
          <small class=" text-xs ">{{ currentInvoice.invoiceId }}</small>
          <p class="text-base">{{ currentInvoice.productDescription }}</p>
        </div>
        <div class="text-right text-gray-800 text-sm flex-1">
          <p>{{ currentInvoice.billerStreatAddress }}</p>
          <p>{{ currentInvoice.billerCity }}</p>
          <p>{{ currentInvoice.billerZipCode }}</p>
          <p>{{ currentInvoice.billerCountry }}</p>
        </div>
      </div>
      <div class="mt-11 flex">
        <div class="flex-1 text-gray-800">
          <span class="text-sm">Invoice Date</span>
          <p class="font-semibold text-lg">{{ currentInvoice.invoiceDate }}</p>
        </div>
        <div class="flex-1">
          <span class="text-sm">Payment Date</span>
          <p class="font-semibold text-lg">{{ currentInvoice.paymentDueDate }}</p>
        </div>
      </div>
      <div class="mt-8 flex">
        <div class="flex-1 text-gray-800">
          <span class="text-sm">Bill To</span>
          <p class="font-semibold text-lg">{{ currentInvoice.clientName }}</p>
          <ul class="text-sm mt-2">
            <li>{{ currentInvoice.clientStreatAddress }}</li>
            <li>{{ currentInvoice.clientCity }}</li>
            <li>{{ currentInvoice.clientZipCode }}</li>
            <li>{{ currentInvoice.clientCountry }}</li>
          </ul>
        </div>
        <div class="flex-1">
          <span class="text-sm">Sent To</span>
          <p class="font-semibold text-lg">{{ currentInvoice.clientEmail }}</p>
        </div>
      </div>
      <!-- Invoices item list details -->
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex flex-col mt-6">
        <div class="-my-2 overflow-x-auto">
          <div class="py-2 align-middle inline-block min-w-full">
            <div class="overflow-hidden shadow rounded-tl-lg rounded-tr-lg pb-2 bg-gray-100">
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th scope="col" class=" px-6 pt-6 pb-2 text-left text-base font-bold tracking-wider">Item Name</th>
                    <th scope="col" class=" px-6 pt-6 pb-2 text-left text-base font-bold tracking-wider">QTY.</th>
                    <th scope="col" class=" px-6 pt-6 pb-2 text-left text-base font-bold tracking-wider">Price</th>
                    <th scope="col" class=" px-6 pt-6 pb-2 text-left text-base font-bold tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in currentInvoice.invoiceItemList" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap"><p>{{ item.itemName }}</p></td>
                    <td class="px-6 py-4 whitespace-nowrap"><p>{{ item.itemQty }}</p></td>
                    <td class="px-6 py-4 whitespace-nowrap"><p>{{ item.itemPrice}}</p></td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><p>{{ item.total }}</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class=" bg-gray-700 flex items-center justify-between px-6 py-6 rounded text-white font-semibold text-lg">
          <h3>Amount Due</h3>
          <h3>${{ currentInvoice.invoiceTotal }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'InvoiceDetail',
  data(){
    return {
      currentInvoice: null,
    };
  },
  
  created(){
    this.getCurrentInvoice();
  },

  methods: {
    ...mapMutations(['SET_CURRENT_INVOICE']),
  
    getCurrentInvoice(){
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
      this.currentInvoice = this.currentInvoiceArray[0];
    },
  },
  computed: {
    ...mapState(['currentInvoiceArray']),
  },
};
</script>