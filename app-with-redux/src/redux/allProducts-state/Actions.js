import { allProductsActionTypes } from "../actionTypes"
export const  fetchingAllProductsStarts=()=>({
type:allProductsActionTypes.FETCHING_ALL_PRODUCTS_STARTS
})
export const  fetchingAllProductsSucees=(products)=>({
type:allProductsActionTypes.FETCHING_ALL_PRODUCTS_SUCCESS,
payload:products
})
export const  fetchingAllProductsFailure=(error)=>({
type:allProductsActionTypes.FETCHING_ALL_PRODUCTS_FAILURE,
payload:error
})