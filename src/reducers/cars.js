import { actions } from "../actions/cars";

export const Cars = (
  state = {
    loader: false,
    car: null,
    error: null
  },
  action
) => {
  switch (action.type) {
    case actions.LOAD_DATA_START:
      return {
        ...state,
        loader: true,
        error: null
      };
    case actions.LOAD_DATA_SUCCESS:
      return {
        ...state,
        loader: false,
        car: action.data,
        error: null
      };
    case actions.LOAD_DATA_FAILURE:
      return {
        ...state,
        loader: false,
        car: null,
        error: action.error
      };
    default:
      return state;
  }
};
