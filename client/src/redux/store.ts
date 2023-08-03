import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
  import thunk from "redux-thunk";
  import { productReducer } from "./products/product.reducer";
  import { signupReducer } from "./auth/signup.reducer";
  import { loginReducer } from "./auth/login.reducer"
  
  const root = combineReducers({
    productReducer,
    signupReducer,
    loginReducer,
  });
  export const store = legacy_createStore(root, compose(applyMiddleware(thunk)));
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  // Use throughout your app instead of plain `useDispatch` and `useSelector`
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;