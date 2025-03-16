import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import User from "./pages/Dashboard/User";
import UserAdd from "./components/user/userAdd";
import UserEdit from "./components/user/userEdit";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/user" element={<User />} />
            <Route index path="/user-add" element={<UserAdd />} />
            <Route index path="/user-edit" element={<UserEdit />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
