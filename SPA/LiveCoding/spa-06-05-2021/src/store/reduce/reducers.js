import {
  EMAIL_VALUE,
  IS_VALID_PASSWORD,
  IS_VALID_EMAIL,
  PASSWORD_VALUE,
} from "./actions";

export function emailReducer(state, action) {
  switch (action.type) {
    case EMAIL_VALUE:
      return { ...state, email: action.payload };
    case IS_VALID_EMAIL:
      return { ...state, isValidEmail: action.payload };
    default:
      return state;
  }
}

export function passwordReducer(state, action) {
  switch (action.type) {
    case PASSWORD_VALUE:
      return { ...state, password: action.payload };
    case IS_VALID_PASSWORD:
      return { ...state, isValidPassword: action.payload };
    default:
      return state;
  }
}
