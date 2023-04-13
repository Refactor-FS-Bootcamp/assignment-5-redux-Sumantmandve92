import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";
import { useEffect } from "react";
import { getAllProducts, showDetailedProduct } from "../../API-globle-state/products";
import './allproducts.css'
import { useNavigate } from "react-router-dom";
import { removePreviousProduct } from "../../redux/productDetails-state/Actions";

/**
 * 
 */
const AllProducts = () => {
    const products = useSelector(store => store.allProducts.products)
    const dispatch = useDispatch();

const navigate=useNavigate();
    // ===================================
    useEffect(() => {
        getAllProducts(dispatch);
    }, [])

const getDetailsOfThisProduct=(id)=>{
    dispatch(removePreviousProduct());
    showDetailedProduct(id,dispatch);

    navigate("productDetails")
}

    // ====================================
    return (
        <>
            <div className="allProducts">
                <div className="allproducts-container">
                    {
                        products && products.map((product, index) => (
                            <div className="product-container" key={index}  onClick={()=>getDetailsOfThisProduct(product.id)}>
                                <div className="image-container">
                                    <img className="product-image" src={product.image} alt={product.title} />
                                </div>
                                <div className="product-info">
                                    <div className="title">{product.title}</div>
                                    <div className="price">Price : ${product.price}</div>
                                    <button>See detailes...</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    );
}


// #endregion

export default AllProducts;