import {combineReducers} from 'redux';
import { productsReducer } from './allProductsReducer';
import { productDetailsReducer } from './productDetailsReducer';



  const  rootReducer=combineReducers({
    allProducts:productsReducer,
    product:productDetailsReducer
})
export default rootReducer;