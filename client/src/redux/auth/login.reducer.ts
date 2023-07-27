import { LoginDetails } from "./login.actions";
import * as loginTypes from "./login.types";

interface LoginState {
    isLoading: boolean,
    isError: boolean,
    isAuth: boolean,
    details: LoginDetails
}

const initLoginState: LoginState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    details: {
        email: "",
        password: ""
    }
}

interface ActionType {
    type: string;
    payload: LoginDetails
}

export const loginReducer = (state = initLoginState, action: ActionType) => {
    const { type, payload } = action;
    switch(type){
        case loginTypes.LOGIN_SUCCESS:{
            return {
                ...state,
                details: payload,
                isLoading: false,
                isAuth: true,
              };
        }
        case loginTypes.LOGIN_REQUEST:{
            return {
                ...state, isLoading: true
            }
        }
        case loginTypes.LOGIN_ERROR: {
            return {
                ...state, isError: true
            }
        }
        default:{
            return state;
        }
    }
}