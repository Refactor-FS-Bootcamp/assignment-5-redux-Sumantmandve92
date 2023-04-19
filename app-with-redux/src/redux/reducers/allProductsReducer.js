import { allProductsActionTypes } from "../actionTypes";

const ALL_PRODUCTS_INITIAL_STATE = {
    isFetching: false,
    products: [],
    error: null
}


export const productsReducer = (state = ALL_PRODUCTS_INITIAL_STATE, action) => {
    switch (action.type) {
        case allProductsActionTypes.FETCHING_ALL_PRODUCTS_STARTS:
            return {
                isFetching: true,
                products: [],
                error: null
            }
        case allProductsActionTypes.FETCHING_ALL_PRODUCTS_SUCCESS:
            return {
                isFetching: false,
                products: action.payload,
                error: null
            }
        case allProductsActionTypes.FETCHING_ALL_PRODUCTS_FAILURE:
            return {
                isFetching: false,
                products: [],
                error: action.payload
            }

        default:
            return state;
    }
}