import axios from "axios";
import { AppDispatch, useAppDispatch } from "../store";
import * as signupTypes from "./signup.types";
import { SignupActionType } from "./signup.reducer";

export interface SignupType {
    name: string;
    email: string;
    password: string;
}

export const signupSuccess = (payload: SignupType) => {
    return { type: signupTypes.SIGNUP_SUCCESS, payload }
}

export const signupError = ():any => {
    
    return { type: signupTypes.SIGNUP_ERROR };
};

export const signupLoading = ():any => {
    return { type: signupTypes.SIGNUP_LOADING }
}
