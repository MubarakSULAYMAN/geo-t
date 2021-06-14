import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeOption: '',
    currentTab: 'PreferredDestinationCreate',
    isError: false,
    errorMessage: 'An error just occured. It should resolve soon.',
  },

  mutations: {
    UPDATE_ACTIVE_OPTION(state, data) {
      state.activeOption = data;
    },

    UPDATE_CURRENT_TAB(state, data) {
      state.currentTab = data;
    },

    UPDATE_ERROR_MESSAGE(state, data) {
      state.errorMessage = data;
    },

    UPDATE_ERROR_STATE(state, data) {
      state.isError = data;
    },
  },

  actions: {
    setActiveOption({ commit }, payload) {
      commit('UPDATE_ACTIVE_OPTION', payload);
    },

    changeView({ commit }, payload) {
      commit('UPDATE_CURRENT_TAB', payload);
    },

    setErrorMessage({ commit }, payload) {
      commit('UPDATE_ERROR_STATE', true);
      commit('UPDATE_ERROR_MESSAGE', payload);

      setTimeout(() => {
        commit('UPDATE_ERROR_STATE', false);
        commit('UPDATE_ERROR_MESSAGE', 'An error just occured. It should resolve soon.');
      }, 3500);
    },
  },

  modules: {
  },
});
