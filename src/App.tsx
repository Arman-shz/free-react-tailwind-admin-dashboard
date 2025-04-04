import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import UserList from "./pages/Dashboard/User";
import LoginForm from "./pages/Login/LoginForm";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/userList" element={<UserList />} />
            <Route index path="/login" element={<LoginForm />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
