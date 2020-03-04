const initialState = {
  root: {
    pk: null,
    email: '',
    first_name: '',
    last_name: '',
    wishlist: [],
  },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_REFRESH_USER_DATA':
      return {
        ...state,
        isFetching: true,
      };

    case 'FINISHED_REFRESH_USER_DATA':
      return {
        ...state,
        isFetching: false,
        pk: action.data.pk,
        email: action.data.email,
        first_name: action.data.first_name,
        last_name: action.last_name,
        lastUpdated: action.data.receivedAt,
      };

    case 'FAILED_REFRESH_USER_DATA':
      return {
        ...state,
        isFetching: false,
        lastUpdated: action.data.receivedAt,
      };

    case 'START_REFRESH_WISHLIST_DATA':
      return {
        ...state,
        isFetching: true,
      };

    case 'FINISHED_REFRESH_WISHLIST_DATA':
      return {
        ...state,
        wishlist: action.data.wishlist,
      };

    case 'FAILED_REFRESH_WISHLIST_DATA':
      return {
        ...state,
        wishlist: [],
      };
  }
}
