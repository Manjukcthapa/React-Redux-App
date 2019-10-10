import { START_FETCHING} from '../actions';

export const initialState = {
    photo: [""],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
