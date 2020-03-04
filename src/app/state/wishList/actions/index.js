import API from '../../../const';

const startRefreshWishList = () => {
  return {
    type: 'START_REFRESH_WISHLIST_DATA',
  };
};

const finishRefreshWishList = data => {
  return {
    type: 'FINISHED_REFRESH_WISHLIST_DATA',
    payload: {
      data,
      lastUpdated: Date.now(),
    },
  };
};

const failedRefreshWishList = data => {
  return {
    type: 'FAILED_REFRESH_WISHLIST_DATA',
    payload: {
      error: data,
      lastUpdated: Date.now(),
    },
  };
};

export const actionFetchDataWishListForUser = () => dispatch => {
  dispatch(startRefreshWishList());
  fetch(API.getUserWishList, {
    method: 'GET',
    headers: {
      credentials: 'same-origin',
      'Content-Type': 'application/json',
    },
  })
    .then(json => {
      dispatch(finishRefreshWishList(json));
    })
    .catch(error => {
      return error.response.json().then(data => {
        dispatch(failedRefreshWishList(data));
      });
    });
};
