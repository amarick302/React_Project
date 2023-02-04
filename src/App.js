import './App.css';
import Navbar from './components/navBar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './components/signin/Signin';
import { useState } from 'react';
import Context from './Context';
import Signup from './components/signup/Signup';
import ProductPage from './ProductPage';
import ProductDetails from './components/producDetails/ProductDetails';
import PlacingOrder from './components/placingOrder/PlacingOrder';
function App() {
  const [element, setElement] = useState(["Home", "Add Product", "Signin", "searchBar"])
  const [product, setProduct] = useState({
    image: '',
    name: '',
    desc: '',
    price: '',
    totalPrice: ''
  });
  const [address, setAddress] = useState([
    {
      id: 1,
      name: 'Atanu Marick',
      contact: 1234567890,
      street: 'Majilpur Beleroad',
      city: 'Jaynagar Majilpur',
      state: 'west Bengal',
      landmark: 'Near Nabankur Sangha Club',
      zipcode: 743337
    }
  ]);
  const [quantity, setQuantity] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      {/* here i passed the value as object */}
      <Context.Provider value={{ element, setElement, product, setProduct, address, setAddress, quantity, setQuantity, activeStep, setActiveStep,isActive,setIsActive}}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Navbar />} />
            <Route exact path="/login" element={<Signin />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/productsPage' element={<ProductPage />} />
            <Route exact path='/productDetails' element={<ProductDetails />} />
            <Route exact path='/placeOrder' element={<PlacingOrder />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  )
}

export default App;
