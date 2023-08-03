import * as ProdTypes from "./product.types";

export interface ProductType{
  image: string;
  name: string;
  price: number;
  description: string;
  quantity: number
}

export const requestProds = ():any => {
  return {type: ProdTypes.PRODUCT_REQUEST}
}

export const postProds = ():any => {
  return {type: ProdTypes.POST_PRODUCT_SUCCESS, }
}

export const getProds = (payload:ProductType[]):any => {
  return {type: ProdTypes.GET_PRODUCT_SUCCESS, payload}
}

export const errorProds = ():any => {
  return {type: ProdTypes.PRODUCT_REQUEST}
}