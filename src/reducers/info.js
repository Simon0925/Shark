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

const INITIAL_STATE = {
  user: {},
  contacts: [],
  randomData: {},
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    // login/logout user
    case LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true
      };
    case LOGIN_USER_SUCCESS:
      console.log("payload ", typeof payload);
      return {
        ...state,
        user: Object.assign({}, state.user, payload),
        loading: false
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case LOGOUT_USER:
      return INITIAL_STATE;
    // fetch random
    case FETCH_RANDOM_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_RANDOM_SUCCESS:
      return {
        ...state,
        randomData: Object.assign({}, state.user, payload),
        loading: false
      };
    case FETCH_RANDOM_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    // fetch contacts
    case FETCH_CONTACTS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: [...payload],
        loading: false
      };
    case FETCH_CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
