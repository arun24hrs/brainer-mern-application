import * as singupType from "./signup.types";

export interface SignupDetailsType{
    name: string;
    email: string;
    password: string;
}
export interface SignupActionType{
    type: string;
    payload: SignupDetailsType
}

const initSignupState = {
    isLoading: false,
    isError: false,
    details: {
        name: "",
        email: "",
        passoword: ""
    }
}

export const signupReducer = (state = initSignupState, action: SignupActionType) => {
    const {type, payload} = action;

    switch(type){
        case (singupType.SIGNUP_SUCCESS):{
            return {...state, isLoading:false, isError:false, details:{...payload}};
        }
        case(singupType.SIGNUP_LOADING):{
            return {...state, isLoading: true}
        }
        case(singupType.SIGNUP_ERROR):{
            return {...state, isLoading: false, isError: true}
        }
        default: {
            return state;
        }
    }
}