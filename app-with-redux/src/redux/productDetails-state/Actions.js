import {productDetailsActionTypes } from "../actionTypes"
export const  fetchingProductDetailesStarts=()=>({
type:productDetailsActionTypes.FETCHING_PRODUCT_STARTS
})
export const  fetchingProductDetailesSucees=(product)=>({
type:productDetailsActionTypes.FETCHING_PRODUCT_SUCCESS,
payload:product
})
export const  fetchingProductDetailesFailure=(error)=>({
type:productDetailsActionTypes.FETCHING_PRODUCT_FAILURE,
payload:error
})
export const  removePreviousProduct=()=>({
type:"REMOVE_PRODUCT",
payload:null
})