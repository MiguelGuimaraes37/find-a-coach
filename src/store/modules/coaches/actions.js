export default {
  /*
  getCoachById(context, id) {
    const coaches = context.state.coaches;

    const coachById = coaches.find((c) => c.id === id);
    return coachById;
  },
  */
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    context.commit('registerCoach', coachData);
  },
};
