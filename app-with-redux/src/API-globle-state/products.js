import { fetchingAllProductsFailure, fetchingAllProductsStarts, fetchingAllProductsSucees } from "../redux/allProducts-state/Actions";
import axios from 'axios';
import { fetchingProductDetailesFailure, fetchingProductDetailesStarts, fetchingProductDetailesSucees } from "../redux/productDetails-state/Actions";
export const getAllProducts = async (dispatch) => {
    try {
        const url = "https://fakestoreapi.com/products";
        await dispatch(fetchingAllProductsStarts());
        await axios.get(url)
            .then((res) => {
                dispatch(fetchingAllProductsSucees(res.data));
                console.log(res.data);

            })
            .catch((error) => {
                dispatch(fetchingAllProductsFailure(error));
                console.log(error);
            })

    } catch (error) {
        console.log(error);
    }


}
export const showDetailedProduct = async (id,dispatch) => {
    try {
        const url = `https://fakestoreapi.com/products/${id}`;
        await dispatch(fetchingProductDetailesStarts());
        await axios.get(url)
            .then((res) => {
                dispatch(fetchingProductDetailesSucees(res.data));
                console.log(res.data);

            })
            .catch((error) => {
                dispatch(fetchingProductDetailesFailure(error));
                console.log(error);
            })

    } catch (error) {
        console.log(error);
    }


}