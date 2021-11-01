<template>
    <router-link :to="{ name: 'InvoiceDetail', params: { invoiceId: invoice.invoiceId }}" class=" flex items-center shadow-md rounded px-2 py-3 justify-between text-gray-800 border border-gray-100 relative">
        <span class=" w-20 mr-3">#{{ invoice.invoiceId.substring(0,5) }} </span>
        <p class="flex-1 mr-3">{{ invoice.clientName }}</p>
        <strong class="font-bold w-16 mr-3">${{ invoice.invoiceTotal }}</strong>
        <div class="flex items-center gap-x-4 flex-1 justify-end">
            <span :class="{'bg-green-700': invoice.invoicePaid, 'bg-yellow-500': invoice.invoicePending, 'bg-gray-400': invoice.invoiceDraft }" class="w-3 h-3 rounded-full"></span>
            <span class="hidden sm:block" v-if="invoice.invoicePaid">Paid</span>
            <span class="hidden sm:block" v-if="invoice.invoicePending">Pending</span>
            <span class="hidden sm:block" v-if="invoice.invoiceDraft">Draft</span>
            <svg class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'Invoice',
    props: ['invoice'],
}
</script>