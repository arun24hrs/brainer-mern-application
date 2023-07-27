import * as loginTypes from "./login.types";

export interface LoginDetails {
    email: string;
    password: string
}

export const loginSuccess = (payload: LoginDetails) => {
    return {type: loginTypes.LOGIN_SUCCESS, payload}
}

export const loginRequest = () => {
    return { type: loginTypes.LOGIN_REQUEST };
  };
  
export const loginError = () => {
    return { type: loginTypes.LOGIN_ERROR };
};
  
export const logoutUser = () => {
    return { type: loginTypes.LOGOUT_USER };
};