const initialState = {
  pk: null,
  email: '',
  firstName: '',
  lastName: '',
  isFetching: false,
  fetchError: '',
  lastUpdated: null,
};

export default function profileReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case 'START_REFRESH_USER_DATA':
      return {
        ...state,
        isFetching: true,
        fetchError: '',
      };

    case 'FINISHED_REFRESH_USER_DATA': {
      const {
        data: { pk, email, first_name, last_name } = {},
        lastUpdated,
      } = payload;
      return {
        ...state,
        isFetching: false,
        pk,
        email,
        firstName: first_name,
        lastName: last_name,
        lastUpdated,
        fetchError: '',
      };
    }
    case 'FAILED_REFRESH_USER_DATA': {
      const { data, lastUpdated } = payload;
      return {
        ...state,
        isFetching: false,
        fetchError: data,
        lastUpdated,
      };
    }
    default:
      return state;
  }
}
