import { createStore } from 'vuex';
import firebase from "../firebase/firebaseInit";

export default createStore({
  state: {
    invoiceData: [],
    invoiceModal: null,
    confirmModalActive: null,
    invoicesLoaded: null,
    currentInvoiceArray: null,
    editInvoice: null,
  },
  mutations: {
    TOGGLE_INVOICE(state){
      state.invoiceModal = !state.invoiceModal;
    },
    TOGGLE_CONFIRMMODALACTIVE(state){
      state.confirmModalActive = !state.confirmModalActive;
    },
    SET_INVOICE_DATA(state, payload){
      // retriving payload from action using commit and push data to array in state invoiceData array
      state.invoiceData.push(payload);
    },
    INVOICES_LOADED(state){
      // change state of invoicecesLoaded to true when data is fully loaded
      state.invoicesLoaded = true;
    },
    SET_CURRENT_INVOICE(state, payload){
      state.currentInvoiceArray = state.invoiceData.filter((invoice) =>{
        return invoice.invoiceId === payload;
      });
    },

    // EDIT invoice
    TRUE_EDIT_INVOICE(state){
      state.editInvoice = true;
    },
    FALSE_EDIT_INVOICE(state){
      state.editInvoice = false;
    },
  },
  actions: {
    async GET_INVOICES({commit, state}){
      // get data from firebase
      const getData = firebase.query(firebase.collection(firebase.db, "invoices"));
      const results = await firebase.getDocs(getData);
      
      // for each data get the values form documents
      results.forEach((doc) =>{
        if(!state.invoiceData.some(invoice => invoice.docId === doc.id)){
          const data ={
            docId: doc.id,
            invoiceId: doc.data().invoiceId,
            billerStreatAddress: doc.data().billerStreatAddress,
            billerCity: doc.data().billerCity,
            billerZipCode: doc.data().billerZipCode,
            billerCountry: doc.data().billerCountry,
            clientName: doc.data().clientName,
            clientEmail: doc.data().clientEmail,
            clientStreatAddress: doc.data().clientStreatAddress,
            clientCity: doc.data().clientCity,
            clientZipCode: doc.data().clientZipCode,
            clientCountry: doc.data().clientCountry,
            invoiceDateUnix: doc.data().invoiceDateUnix,
            invoiceDate: doc.data().invoiceDate,
            paymentTerms: doc.data().paymentTerms,
            paymentDueDateUnix: doc.data().paymentDueDateUnix,
            paymentDueDate: doc.data().paymentDueDate,
            productDescription: doc.data().productDescription,
            invoicePending: doc.data().invoicePending,
            invoiceDraft: doc.data().invoiceDraft,
            invoiceItemList: doc.data().invoiceItemList,
            invoiceTotal: doc.data().invoiceTotal,
            invoicePaid: doc.data().invoicePaid,
          };
          // send commit to mutations with data payload and push data to array
          commit('SET_INVOICE_DATA', data);
        }
      });
      // when all data is loaded send info to mutations with commit 
      commit('INVOICES_LOADED');
    },
  },
  modules: {
  }
})
