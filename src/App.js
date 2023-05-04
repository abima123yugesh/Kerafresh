import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AddProduct from "./pages/AddProduct";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import "antd/dist/antd";
import "./App.css";
import AddProductCategory from "./pages/AddProductCategory";
import ProductCategoryList from "./pages/ProductCategoryList";
import Orders from "./pages/Orders";
import Signin from "./pages/Signin";
import OrderTracking from "./pages/OrderTracking";
import Enquiries from "./pages/Enquiries";
import EditProductCategory from "./pages/EditProductCategory";
import EditProduct from "./pages/EditProduct";
import PrivateRoutes from "./pages/PrivateRoutes";
import { Suspense, lazy } from "react";
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/main" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="edit-product/:id" element={<EditProduct />} />
            <Route
              path="add-productcategory"
              element={<AddProductCategory />}
            />
            <Route
              path="productcategory-list"
              element={<ProductCategoryList />}
            />
            <Route
              path="edit-productcategory/:id"
              element={<EditProductCategory />}
            />
            <Route path="orders" element={<Orders />} />
            <Route path="order-tracking" element={<OrderTracking />} />
            <Route path="enquiry" element={<Enquiries />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
