import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import PrivateRoutes from "./pages/PrivateRoutes";
const Account = lazy(() => import("./pages/Account"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="login"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Register />
                </Suspense>
              }
            />

            <Route element={<PrivateRoutes />}>
            <Route
              path="account"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Account />
                </Suspense>
              }
            />
              <Route
                path="cart"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Cart />
                  </Suspense>
                }
              />
              <Route
                path="checkout/:id"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Checkout />
                  </Suspense>
                }
              />
              <Route
                path="wishlist/:id"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Wishlist />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
