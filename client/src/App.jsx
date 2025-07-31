import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Home_dashboard from "./pages/Dashboard/Home_dashboard";
import DashboardLogin from "./pages/Dashboard/DashboardLogin";
import Sidebar from "./pages/Dashboard/Sidebar";
import DashboardSignup from "./pages/Dashboard/DashboardSignup";
import Notification from "./pages/Dashboard/Notification";
import Billing from "./pages/Dashboard/Billing";
import DashboardHeader from "./pages/Dashboard/DashboardHeader";
import AddProduct from "./pages/Dashboard/AddProduct";

const MainLayout = () => {
  const isAuth = useSelector((state) => state.user.auth);
  return (
    <div>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sublimation"
            element={
              <Protected isAuth={isAuth}>
                <Sublimation />
              </Protected>
            }
          />
          <Route
            path="/offset"
            element={
              <Protected isAuth={isAuth}>
                <Offset />
              </Protected>
            }
          />
          <Route
            path="/stationery"
            element={
              <Protected isAuth={isAuth}>
                <Stationery />
              </Protected>
            }
          />
          <Route
            path="/embroidery"
            element={
              <Protected isAuth={isAuth}>
                <Embroidery />
              </Protected>
            }
          />
          <Route
            path="/uvPrinting"
            element={
              <Protected isAuth={isAuth}>
                <UVPrinting />
              </Protected>
            }
          />
          <Route
            path="/largePrinting"
            element={
              <Protected isAuth={isAuth}>
                <LargePrinting />
              </Protected>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`${
          sidebarOpen ? "w-[20%]" : "w-0"
        } transition-all duration-300 overflow-hidden h-full sticky top-0`}
      >
        <Sidebar setSidebarOpen={setSidebarOpen} />
      </div>
      <div className="flex-1">
        {/* Pass the toggle function to Header so burger icon can use it */}
        <DashboardHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Routes>
          <Route path="/dashboard" element={<Home_dashboard />} />
          <Route path="/dashboard/login" element={<DashboardLogin />} />
          <Route path="/dashboard/signup" element={<DashboardSignup />} />
          <Route path="/dashboard/addProduct" element={<AddProduct />} />
          <Route path="/dashboard/billing" element={<Billing />} />
          <Route path="/dashboard/notification" element={<Notification />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  const location = useLocation();

  // ✅ Fix: allow any /dashboard or /dashboard/child route
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return <div>{isDashboardRoute ? <DashboardLayout /> : <MainLayout />}</div>;
};

export default App;
