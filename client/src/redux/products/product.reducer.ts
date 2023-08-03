import { ProductType } from "./product.actions";
import * as ProdTypes from "./product.types";

export interface ProdcutStoreType {
  isLoading: boolean;
  isError: boolean;
  products: ProductType[] | [];
}

export interface ProductActionType {
  type: string,
  payload: ProductType
}

const initState:ProdcutStoreType = {
  isLoading: false,
  isError: false,
  products: []

}

export const productReducer = (state = initState, action: ProductActionType) => {
  const {type, payload} = action;
  switch(type){
    case(ProdTypes.PRODUCT_REQUEST):{
      return {...state, isLoading: true}
    }
    case(ProdTypes.GET_PRODUCT_SUCCESS):{
      return {...state, isLoading: false, products:payload}
    }
    case(ProdTypes.POST_PRODUCT_SUCCESS): {
      return {...state, isLoading: false, isError: false}
    }
    case(ProdTypes.PRODUCT_ERROR):{
      return {...state, isLoading: false, isError: true}
    }
     default:{
      return state;
    }
  }
}