import "./App.css";
import Navbar from "./containers/navbar/Navbar";
import ProductScreen from "./containers/products/ProductScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartScreen from "./containers/cart/CartScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductScreen />} />
        <Route path="products" element={<ProductScreen />} />
        <Route path="cart" element={<CartScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
