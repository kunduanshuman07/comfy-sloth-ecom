import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./pages/PrivateRoute";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";

import styled from "styled-components";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
