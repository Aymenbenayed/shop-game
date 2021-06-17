import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
} from "../actionTypes/user";

const initialState = {
  user: null,
  users:null,
  isAuth: false,
  loadUser: false,
  errors: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        user: payload.user,
        isAuth: true,
        errors: [],
      };
    case LOGIN_USER:

      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        user: payload.user,
        isAuth: true,
        errors: [],
      };
    case CURRENT_USER:
      return {
        ...state,
        loadUser: false,
        user: payload,     
        isAuth: true,
        errors: [],
      };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      
      return {
        ...state,
        loadUser: false,
        errors: [],
        user: {},
        isAuth: false,
        loading: false,
      };
    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};
export default userReducer;
