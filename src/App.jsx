import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import kids_banner from "./assets/banner_kids.png";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import AboutUs from "./Pages/About";
import Contact from "./Pages/Contact";
import "./index.css";


const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LoginWithFooter />} />
        <Route path="/signup" element={<SignupWithFooter />} />
        <Route path="/about" element={<AboutWithFooter />} />
        <Route path="/contact" element={<ContactWithFooter />} />
        <Route path="/home" element={<Shopwithnavbar />} />
        <Route path="/women" element={<ShopCategoryWithFooter banner={women_banner} category="women" />} />
        <Route path="/mens" element={<ShopCategoryWithFooter banner={men_banner} category="men" />} />
        <Route path="/kids" element={<ShopCategoryWithFooter banner={kids_banner} category="kid" />} />
        <Route path="/product/:productId" element={<ProductWithFooter />} />
        <Route path="/cart" element={<CartWithFooter />} />
      </Routes>
    </Router>
  );
};

const AboutWithFooter = () => (
  <>
    <Navbar />
    <AboutUs />
    <Footer />
  </>
)

const ContactWithFooter = () => (
  <>
    <Navbar />
    <Contact />
    <Footer />
  </>
)

const Shopwithnavbar = () => (
  <>
    <Navbar />
    <Shop />
  </>
)

const LoginWithFooter = () => (
  <>
    <Login />
    <Footer />
  </>
);

const SignupWithFooter = () => (
  <>
    <Signup />
    <Footer />
  </>
);

const ProductWithFooter = () => (
  <>
    <Navbar />
    <Product />
    <Footer />
  </>
);

const CartWithFooter = () => (
  <>
    <Navbar />
    <Cart />
    <Footer />
  </>
);

const ShopCategoryWithFooter = ({ banner, category }) => (
  <>
    <Navbar />
    <ShopCategory banner={banner} category={category} />
    <Footer />
  </>
);

export default App;
