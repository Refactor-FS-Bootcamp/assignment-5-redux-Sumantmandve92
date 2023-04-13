import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/header/Navbar';
import AllProducts from './components/allProducts/AllProducts';
import ProductDetails from './components/productDetails/ProductDetails';
import { useSelector } from 'react-redux';
function App() {
  const product = useSelector(state => state.product.product)
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='' element={<AllProducts />} />
            {
              product && <Route path='productDetails' element={<ProductDetails />} />
            }

          

          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
