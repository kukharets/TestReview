import Urls from '../../const';

const startRefreshUser = () => {
  return {
    type: 'START_REFRESH_USER_DATA',
  };
};

const finishRefreshUser = data => {
  return {
    type: 'FINISHED_REFRESH_USER_DATA',
    data,
    receivedAt: Date.now(),
  };
};

const failedRefreshUser = data => {
  return {
    type: 'FAILED_REFRESH_USER_DATA',
    errors: data,
    receivedAt: Date.now(),
  };
};

export const fetchNewUserData = () => {
  return dispatch => {
    dispatch(startRefreshUser());
    return fetch('/refresh-user/', {
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
};

const start_refresh_wishlist = () => {
  return {
    type: 'START_REFRESH_WISHLIST_DATA',
  };
};

const finishRefreshWishlist = data => {
  return {
    type: 'FINISHED_REFRESH_WISHLIST_DATA',
    data,
    receivedAt: Date.now(),
  };
};

const failedRefreshWishlist = data => {
  return {
    type: 'FAILED_REFRESH_WISHLIST_DATA',
    errors: data,
    receivedAt: Date.now(),
  };
};

export const fetchDataWishlistForUser = () => {
  return dispatch => {
    dispatch(start_refresh_wishlist());
    return fetch(Urls.backend_url, {
      method: 'GET',
      headers: {
        credentials: 'same-origin',
        'Content-Type': 'application/json',
      },
    })
      .then(json => {
        dispatch(finishRefreshWishlist(json));
      })
      .catch(error => {
        return error.response.json().then(data => {
          dispatch(failedRefreshWishlist(data));
        });
      });
  };
};
