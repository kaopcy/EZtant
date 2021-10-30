import { createStore } from 'vuex'

export const store = createStore({
  state: {
      isMobile: false,
  },
  mutations: {
      setIsMoblie(state , payload){
        state.isMobile = payload
      }
  },
  actions: {
  },
  modules: {
  }
})
