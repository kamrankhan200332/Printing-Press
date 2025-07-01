import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sublimation from "./pages/Sublimation/Sublimation";
import Offset from "./pages/Offset/Offset";
import Embroidery from "./pages/Embroidery/Embroidery";
import LargePrinting from "./pages/LargePrinting/LargePrinting";
import Stationery from "./pages/Stationery/Stationery";
import UVPrinting from "./pages/UVPrinting/UVPrinting";
import Cart from "./pages/Cart/Cart";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Error from "./pages/Error/Error";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Login from "./pages/Login/Login";
import Protected from "./components/Protected/Protected";
import Signup from "./pages/Signup/Signup";
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector((state) => state.user.auth);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/sublimation"
            exact
            element={
              <Protected isAuth={isAuth}>
                <Sublimation />
              </Protected>
            }
          />
          <Route
            path="/offset"
            exact
            element={
              <Protected isAuth={isAuth}>
                <Offset />
              </Protected>
            }
          />
          <Route
            path="/stationery"
            exact
            element={
              <Protected isAuth={isAuth}>
                <Stationery />
              </Protected>
            }
          />
          <Route
            path="/embroidery"
            exact
            element={
              <Protected isAuth={isAuth}>
                <Embroidery />
              </Protected>
            }
          />
          <Route
            path="/uvPrinting"
            exact
            element={
              <Protected isAuth={isAuth}>
                <UVPrinting />
              </Protected>
            }
          />
          <Route
            path="/largePrinting"
            exact
            element={
              <Protected isAuth={isAuth}>
                <LargePrinting />
              </Protected>
            }
          />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/singleProduct" exact element={<SingleProduct />} />
          <Route path="/*" exact element={<Error />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
