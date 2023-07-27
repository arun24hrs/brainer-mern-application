import * as signupTypes from "./signup.types";

export interface SignupType {
    name: string;
    email: string;
    password: string;
}

export const signupSucess = (payload: SignupType) => {
    return {type: signupTypes.SIGNUP_SUCCESS, payload}
}

export const signupError = () => {
    return { type: signupTypes.SIGNUP_ERROR };
};

export const signupLoading = () => {
    return {type: signupTypes.SIGNUP_LOADING}
}