import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {
    createCard(state, {id}) {
      if (state.cards.findIndex(x => x.id === id) === -1) state.cards.push({id, name: 'test', body: 'test'});
    },
    changeName(state, {newName, id}) {
      const index = state.cards.findIndex(x => x.id === id);
      if (index !== -1) state.cards[index].name = newName;
    },
    changeBody(state, {newBody, id}) {
      const index = state.cards.findIndex(x => x.id === id);
      if (index !== -1) state.cards[index].body = newBody;
    }
  },
  actions: {
  },
  modules: {
  }
});

export default store;
