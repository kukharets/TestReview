const initialState = {
  wishListStoreData: [],
  isFetching: false,
  fetchError: '',
  lastUpdated: null,
};

export default function wishListReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case 'START_REFRESH_WISHLIST_DATA':
      return {
        ...state,
        isFetching: true,
        fetchError: '',
      };

    case 'FINISHED_REFRESH_WISHLIST_DATA': {
      const { data, lastUpdated } = payload;
      return {
        ...state,
        isFetching: false,
        fetchError: '',
        wishListStoreData: data,
        lastUpdated,
      };
    }
    case 'FAILED_REFRESH_WISHLIST_DATA': {
      const { data, lastUpdated } = payload;
      return {
        ...state,
        wishListStoreData: [],
        isFetching: false,
        fetchError: data,
        lastUpdated,
      };
    }
    default:
      return state;
  }
}
