import { push } from "connected-react-router";

import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  FETCH_RANDOM_PENDING,
  FETCH_RANDOM_SUCCESS,
  FETCH_RANDOM_ERROR,
  FETCH_CONTACTS_PENDING,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR
} from "../constants";
import ApiService from "../services/ApiService";

export const loginUser = () => (dispatch) => {
  dispatch({ type: LOGIN_USER_PENDING });

  ApiService.getApi()
    .then((infoapi) => {
      localStorage.setItem("accessKey", JSON.stringify(infoapi.results[0].login.sha256));
      dispatch({ type: LOGIN_USER_SUCCESS, payload: infoapi.results[0] });
      console.log("getApi",infoapi.results[0] )
      dispatch(push("/"));
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: LOGIN_USER_ERROR, payload: error });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("accessKey");
  dispatch({ type: LOGOUT_USER });
  dispatch(push("/login"));
};

export const getRandom = () => (dispatch) => {
  dispatch({ type: FETCH_RANDOM_PENDING });

  ApiService.getRandom()
    .then((infoapi) => {
      dispatch({ type: FETCH_RANDOM_SUCCESS, payload: infoapi.entries[0] });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_RANDOM_ERROR, payload: error });
    });
};

export const getContacts = () => (dispatch) => {
  dispatch({ type: FETCH_CONTACTS_PENDING });

  ApiService.getContacts()
    .then((infoapi) => {
      dispatch({ type: FETCH_CONTACTS_SUCCESS, payload: infoapi.results });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_CONTACTS_ERROR, payload: error });
    });
};
