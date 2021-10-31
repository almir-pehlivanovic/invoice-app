import { createStore } from 'vuex'

export default createStore({
  state: {
    invoiceModal: null,
    confirmModalActive: null,
  },
  mutations: {
    TOGGLE_INVOICE(state){
      state.invoiceModal = !state.invoiceModal;
    },
    TOGGLE_CONFIRMMODALACTIVE(state){
      state.confirmModalActive = !state.confirmModalActive;
    }
  },
  actions: {
  },
  modules: {
  }
})
