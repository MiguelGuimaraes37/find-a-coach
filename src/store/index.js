import { createStore } from 'vuex';

import coachesModule from './modules/coaches';

const store = createStore({
  namespaced: true,
  modules: {
    coaches: coachesModule,
  },
});

export default store;
