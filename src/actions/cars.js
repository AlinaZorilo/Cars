import { API } from "../const/index";
import axios from "axios";

let cancel;

export const actions = {
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
  LOAD_DATA_FAILURE: "LOAD_DATA_FAILURE",
  LOAD_DATA_START: "LOAD_DATA_START"
};

export const LOAD_DATA_SUCCESS = data => {
  return {
    type: actions.LOAD_DATA_SUCCESS,
    data
  };
};

export const LOAD_DATA_START = () => {
  return {
    type: actions.LOAD_DATA_START
  };
};

export const LOAD_DATA_FAILURE = error => {
  return {
    type: actions.LOAD_DATA_FAILURE,
    error
  };
};

export const LOAD_DATA = carNumber => {
  return dispatch => {
    if (typeof cancel === "function") {
      cancel();
    }

    dispatch(LOAD_DATA_START());
    let url = API + carNumber;

    return axios
      .get(url, {
        validateStatus(status) {
          return status < 400;
        },
        cancelToken: new axios.CancelToken(c => {
          cancel = c;
        })
      })
      .then(
        res => {
          return dispatch(LOAD_DATA_SUCCESS(res.data.result));
        },
        res => {
          if (axios.isCancel(res)) {
            return;
          }

          return dispatch(LOAD_DATA_FAILURE("Неправильный номер машины"));
        }
      );
  };
};
