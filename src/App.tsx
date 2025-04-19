import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import UserList from "./pages/Dashboard/User";
import LoginForm from "./pages/Login/LoginForm";
import Product from "./pages/Dashboard/Product";
import AddProduct from "./components/product/addProduct";
import EditProduct from "./components/product/editProduct";
import ProductDetails from "./components/product/productDetails";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<LoginForm />}/>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/userList" element={<UserList />} />
            <Route path="/productList" element={<Product />} />
            <Route path="/productList/add" element={<AddProduct />} />
            <Route path="/productList/edit/:id" element={<EditProduct />} />
            <Route path="/productList/details/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
