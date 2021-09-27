<template>
  <div
    ref="invoiceWrap"
    @click="checkClick"
    class="
      bg-gray-50
      border-gray-300 border-r
      bottom-0
      absolute
      left-0
      mx-auto
      overflow-y-scroll
      pb-9
      pt-6
      px-4
      shadow-2xl
      sm:max-w-2xl
      text-gray-800
      top-0
      w-full
    "
  >
    <Loading v-show="loading" />
    
    <div class="flex items-center">
      <button @click="closeInvoice" class="z-10">
        <svg class="h-6 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <h2 class="-ml-5 flex-1 text-center font-bold text-xl">
        Add New Invoice
      </h2>
    </div>
    <form @submit.prevent="submitForm">
      <!-- Bill from input fields -->
      <div class="mt-11">
        <p class="-mb-2 font-semibold">Bill From:</p>
        <label for="billerStreatAddress" class="block mt-4 text-sm"
          >Address</label
        >
        <input
          type="text"
          name="billerStreatAddress"
          id="billerStreatAddress"
          placeholder="Address"
          class="input-form"
          v-model="billerStreatAddress"
        />
        <div class="flex gap-x-5 justify-between">
          <div>
            <label for="billerCity" class="block mt-4 text-sm">City</label>
            <input
              type="text"
              name="billerCity"
              id="billerCity"
              placeholder="City"
              class="input-form"
              v-model="billerCity"
            />
          </div>
          <div>
            <label for="billerZipCode" class="block mt-4 text-sm"
              >Postal Code</label
            >
            <input
              type="number"
              min="0"
              name="billerZipCode"
              id="billerZipCode"
              placeholder="Postal Code"
              class="input-form"
              v-model="billerZipCode"
            />
          </div>
          <div>
            <label for="billerCountry" class="block mt-4 text-sm"
              >Country</label
            >
            <input
              type="text"
              name="billerCountry"
              id="billerCountry"
              placeholder="Country"
              class="input-form"
              v-model="billerCountry"
            />
          </div>
        </div>
      </div>

      <!-- Bill to input fields -->
      <div class="mt-9">
        <p class="-mb-2 font-semibold">Bill To:</p>
        <label for="clientName" class="block mt-4 text-sm">Name</label>
        <input
          type="text"
          name="clientName"
          id="clientName"
          placeholder="Name"
          class="input-form"
          v-model="clientName"
        />

        <label for="clientEmail" class="block mt-4 text-sm">Email</label>
        <input
          type="email"
          name="clientEmail"
          id="clientEmail"
          placeholder="Email"
          class="input-form"
          v-model="clientEmail"
        />
        <label for="clientStreatAddress" class="block mt-4 text-sm"
          >Address</label
        >
        <input
          type="text"
          name="clientStreatAddress"
          id="clientStreatAddress"
          placeholder="Address"
          class="input-form"
          v-model="clientStreatAddress"
        />

        <div class="flex gap-x-5 justify-between">
          <div>
            <label for="clientCity" class="block mt-4 text-sm">City</label>
            <input
              type="text"
              name="clientCity"
              id="clientCity"
              placeholder="City"
              class="input-form"
              v-model="clientCity"
            />
          </div>
          <div>
            <label for="clientZipCode" class="block mt-4 text-sm"
              >Postal Code</label
            >
            <input
              type="number"
              min="0"
              name="clientZipCode"
              id="clientZipCode"
              placeholder="Postal Code"
              class="input-form"
              v-model="clientZipCode"
            />
          </div>
          <div>
            <label for="clientCountry" class="block mt-4 text-sm"
              >Country</label
            >
            <input
              type="text"
              name="clientCountry"
              id="clientCountry"
              placeholder="Country"
              class="input-form"
              v-model="clientCountry"
            />
          </div>
        </div>
      </div>

      <!-- Invoice Details -->
      <div class="mt-9">
        <p class="-mb-2 font-semibold">Invoice Details:</p>
        <div class="flex gap-x-5 justify-between">
          <div class="flex-1">
            <label for="invoiceDate" class="block mt-4 text-sm"
              >Invoice date</label
            >
            <input
              disabled
              type="text"
              name="invoiceDate"
              id="invoiceDate"
              placeholder="Invoice date"
              class="input-form"
              v-model="invoiceDate"
            />
          </div>
          <div class="flex-1">
            <label for="paymentDueDate" class="block mt-4 text-sm"
              >Payment date</label
            >
            <input
              type="text"
              name="paymentDueDate"
              id="paymentDueDate"
              placeholder="Payment date"
              class="input-form"
              v-model="paymentDueDate"
            />
          </div>
        </div>

        <label for="paymentTerms" class="block mt-4 text-sm"
          >Terms of payment</label
        >
        <select
          class="input-form"
          name="paymentTerms"
          id="paymentTerms"
          placeholder="Select terms"
          v-model="paymentTerms"
        >
          <option value="30">Net 30 days</option>
          <option value="60">Net 60 days</option>
        </select>

        <label for="productDescription" class="block mt-4 text-sm"
          >Invoice Description (optional)</label
        >
        <input
          type="text"
          name="productDescription"
          id="productDescription"
          placeholder="Description"
          class="input-form"
          v-model="productDescription"
        />
      </div>
      <!-- Invoice details list -->
      <div class="relative">
        <div class="items-end mb-3">
          <div class="w-full block">
            <label for="invoiceList" class="block mt-4 text-sm"
              >Invoice list</label
            >
          </div>
          <div
            id="invoiceList"
            class="flex gap-x-5 items-center"
            v-for="(item, index) in invoiceItemList"
            :key="index"
          >
            <input
              type="text"
              name="invoiceName"
              id="invoiceName"
              placeholder="Invoice Name"
              class="input-form"
              v-model="item.itemName"
            />
            <div>
              <input
                type="number"
                min="1"
                name="invoiceQty"
                id="invoiceQty"
                placeholder="Qty"
                class="input-form"
                v-model="item.itemQty"
              />
            </div>
            <div>
              <input
                type="number"
                min="1"
                name="invoicePrice"
                id="invoicePrice"
                placeholder="Price"
                class="input-form"
                v-model="item.itemPrice"
              />
              <p class="hidden">
                ${{ (item.total = item.itemQty * item.itemPrice) }}
              </p>
            </div>
            <div class="relative h-6">
              <button
                title="Remove"
                type="button"
                @click="deleteInvoiceItem(item.itemId)"
              >
                <svg
                  class="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="absolute right-0">
          <p class="text-base font-bold text-green-700">
            Total: <span>$293.92</span>
          </p>
        </div>
        <div class="mt-12">
          <button
            type="button"
            title="New item"
            class="
              flex
              items-center
              text-white
              bg-gray-700
              w-full
              py-3
              justify-center
              rounded
            "
            @click="addNewInvoiceItem"
          >
            <svg
              class="h-6 w-6 mx-2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            New item
          </button>
        </div>
      </div>

      <!-- Invoice submit, close, draft buttons -->
      <div class="mt-11 flex justify-between items-center">
        <div>
          <button @click="closeInvoice" class="py-3 px-4" title="Close">
            <svg
              class="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center gap-x-9">
          <button @click="saveDraft" class="py-3 px-4" title="Save as draft">
            <svg
              class="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
          </button>
          <button
            @click="publisInvoice"
            title="Submit invoice"
            class="
              px-12
              py-3
              font-semibold
              text-white text-base
              bg-gray-800
              rounded
            "
          >
            Add
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// Importing firestore database
import firebase from "../firebase/firebaseInit";

import { mapMutations } from "vuex";
// Importing unique id for invoice items
import { uuid } from "vue-uuid";
import Loading from "../components/Loading.vue";

export default {
  name: "InvoiceModal",
  data() {
    return {
      loading: null,
      billerStreatAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreatAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
    };
  },
  components: {
    Loading,
  },
  created() {
    // get current date for invoice date field
    this.invoiceDateUnix = Date.now();
    this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString(
      "en-us",
      this.dateOptions
    );
  },
  methods: {
    // use the Mutations from state managment
    ...mapMutations(["TOGGLE_INVOICE"]),
    // close the invoice modal function
    closeInvoice() {
      this.TOGGLE_INVOICE();
    },

    // Add new invoice item list
    addNewInvoiceItem() {
      this.invoiceItemList.push({
        itemId: uuid.v1(),
        itemName: "",
        itemQty: "",
        itemPrice: 0,
        total: 0,
      });
    },

    // Delete invoice item from list
    deleteInvoiceItem(value) {
      this.invoiceItemList = this.invoiceItemList.filter(
        (item) => item.itemId !== value
      );
    },

    // Calculating the invoice item list total
    calcInvoiceTotal() {
      this.invoiceTotal = 0;
      this.invoiceItemList.forEach((item) => {
        this.invoiceTotal += item.total;
      });
    },

    //Publish new invoice
    publisInvoice() {
      this.invoicePending = true;
    },

    // Save draft
    saveDraft() {
      this.invoiceDraft = true;
    },

    // Uploading invoice
    async uploadInvoice() {
      //Form validation later here
      if (this.invoiceItemList.length <= 0) {
        alert("Please ensure you filled out work items!");
        return;
      }
      this.loading = true;

      this.calcInvoiceTotal(); // custom function to calculate total of invoice

      await firebase.setDoc(firebase.doc(firebase.db, "invoices", "invoice"), {
        invoiceId: uuid.v1(),
        billerStreatAddress: this.billerStreatAddress,
        billerCity: this.billerCity,
        billerZipCode: this.billerZipCode,
        billerCountry: this.billerCountry,
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientStreatAddress: this.clientStreatAddress,
        clientCity: this.clientCity,
        clientZipCode: this.clientZipCode,
        clientCountry: this.clientCountry,
        invoiceDateUnix: this.invoiceDateUnix,
        invoiceDate: this.invoiceDate,
        paymentTerms: this.paymentTerms,
        paymentDueDateUnix: this.paymentDueDateUnix,
        paymentDueDate: this.paymentDueDate,
        productDescription: this.productDescription,
        invoicePending: this.invoicePending,
        invoiceDraft: this.invoiceDraft,
        invoiceItemList: this.invoiceItemList,
        invoiceTotal: this.invoiceTotal,
        invoicePaid: null,
      });

      this.loading = false;
      setTimeout(()=>{
        this.closeInvoice(); // custom function for toggling invoice modal
      }, 100)
    },
    // Submiting the form
    submitForm() {
      this.uploadInvoice(); // custom function to upload invoice to firebase
    },
  },
  watch: {
    // whatch the change on select termns option, generate date
    paymentTerms() {
      const futureDate = new Date();
      this.paymentDueDateUnix = futureDate.setDate(
        futureDate.getDate() + parseInt(this.paymentTerms)
      );
      this.paymentDueDate = new Date(
        this.paymentDueDateUnix
      ).toLocaleDateString("en-us", this.dateOptions);
    },
  },
};
</script>

<style>
</style>