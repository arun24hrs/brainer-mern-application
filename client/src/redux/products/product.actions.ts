
import axios from "axios";
import { AppDispatch } from "../store";
import * as types from "./product.types";

// type interface------------------
export interface IProductRequest {
  type: typeof types.PRODUCT_REQUEST;
}

export interface IProductError {
  type: typeof types.PRODUCT_ERROR;
}

export interface IProductSuccess {
  type: typeof types.PRODUCT_SUCCESS;
}


// all type interfaces combined
export type ProductAction =
   IProductRequest
  | IProductError
  | IProductSuccess




const productRequest = (): IProductRequest => {
  return { type: types.PRODUCT_REQUEST };
};

const productError = (): IProductError => {
  return { type: types.PRODUCT_ERROR };
};

// const getProductSuccess = (data: Product[]): IGetProductSuccess => {
//   return { type: types.GET_PRODUCTS_SUCCESS, payload: data };
// };



// export const getProducts = (getProductsParam?: { params: { category: string[],brand:string[],_limit:number ,_page:number} }) => async (dispatch: AppDispatch) => {
//   dispatch(productRequest());
//   try {
//     let data = await getProductsAPI(getProductsParam);
//     if (data) {
//       dispatch(getProductSuccess(data));
//     }
//   } catch (error) {
//     dispatch(productError());
//   }
// };


// export const postSingleProduct = async (payload: any) => {
//   try {
//     await axios.post(`https://kools.onrender.com/cart`, payload);
//   } catch (error) {
//     console.log(error);
//   }
// };


export { productRequest, productError };