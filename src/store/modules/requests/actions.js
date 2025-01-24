export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://main-project-vue-2e40e-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log('IM HERE');
      const error = new Error(response.message || 'Failed to send request!');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', {
      ...newRequest,
    });
  },

  async loadRequests(context) {
    let coachId = context.rootGetters.userId;

    const response = await fetch(
      `https://main-project-vue-2e40e-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
      console.log(request);
    }

    context.commit('setRequests', requests);
  },
};
