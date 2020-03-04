const startRefreshUser = () => {
  return {
    type: 'START_REFRESH_USER_DATA',
  };
};

const finishRefreshUser = data => {
  return {
    type: 'FINISHED_REFRESH_USER_DATA',
    payload: {
      data,
      lastUpdated: Date.now(),
    },
  };
};

const failedRefreshUser = data => {
  return {
    type: 'FAILED_REFRESH_USER_DATA',
    payload: { data, lastUpdated: Date.now() },
  };
};

export const actionFetchNewUserData = () => dispatch => {
  dispatch(startRefreshUser());
  fetch('/refresh-user/', {
    method: 'GET',
    headers: {
      credentials: 'same-origin',
      'Content-Type': 'application/json',
    },
  })
    .then(json => {
      dispatch(finishRefreshUser(json));
    })
    .catch(error => {
      return error.response.json().then(data => {
        dispatch(failedRefreshUser(data));
      });
    });
};
