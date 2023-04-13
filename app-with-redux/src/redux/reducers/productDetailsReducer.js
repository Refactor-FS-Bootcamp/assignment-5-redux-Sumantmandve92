import { productDetailsActionTypes } from "../actionTypes";

const PRODUCT_INITIAL_STATE = {
    isFetching: false,
    product: null,
    error: null
}


export const productDetailsReducer = (state = PRODUCT_INITIAL_STATE, action) => {
    switch (action.type) {
        case productDetailsActionTypes.FETCHING_PRODUCT_STARTS:
            return {
                isFetching: true,
                product: null,
                error: null
            }
        case productDetailsActionTypes.FETCHING_PRODUCT_SUCCESS:
            return {
                isFetching: false,
                product: action.payload,
                error: null
            }
        case productDetailsActionTypes.FETCHING_PRODUCT_FAILURE:
            return {
                isFetching: false,
                product: null,
                error: action.payload
            }
        case "REMOVE_PRODUCT":
            return {
                isFetching: false,
                product: null,
                error: null
            }

        default:
            return state;
    }
}