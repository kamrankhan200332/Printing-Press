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

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sublimation" exact element={<Sublimation />} />
          <Route path="/offset" exact element={<Offset />} />
          <Route path="/stationery" exact element={<Stationery />} />
          <Route path="/embroidery" exact element={<Embroidery />} />
          <Route path="/uvPrinting" exact element={<UVPrinting />} />
          <Route path="/largePrinting" exact element={<LargePrinting />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
