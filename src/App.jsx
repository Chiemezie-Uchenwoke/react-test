import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AuthRoute from "./utils/AuthRoute";
import PropsPage from "./pages/PropsPage"; 
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SpinnerPage from "./pages/SpinnerPage";
import Users from "./pages/Users";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ProductsListPage from "./pages/ProductsListPage";
import ExpensePage from "./pages/ExpensePage";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/prop-modal" element={<PropsPage />} />
          <Route path="/spinner" element={<SpinnerPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/list" element={<ProductsListPage />} />
          <Route path="/expense" element={<ExpensePage />} />

          <Route element={<AuthRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
      </Routes>

      <ScrollToTop />
    </>
  )
}

export default App
