import * as loginTypes from "./login.types";

export interface LoginDetails {
    email: string;
    password: string
}

export const loginSuccess = (payload: LoginDetails) => {
    console.log("second")
    return {type: loginTypes.LOGIN_SUCCESS, payload}
}

export const loginRequest = ():any => {
    return { type: loginTypes.LOGIN_REQUEST };
  };
  
export const loginError = ():any => {
    return { type: loginTypes.LOGIN_ERROR };
};
  
export const logoutUser = ():any => {
    return { type: loginTypes.LOGOUT_USER };
};