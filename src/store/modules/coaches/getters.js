export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  text(state, arg) {
    console.log(state);
    console.log(arg);
  },
};
