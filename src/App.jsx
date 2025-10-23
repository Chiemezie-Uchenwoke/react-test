import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AuthRoute from "./utils/AuthRoute";
import PropsPage from "./pages/PropsPage"; 
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/prop-modal" element={<PropsPage />} />

          <Route element={<AuthRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
      </Routes>

      <ScrollToTop />
    </>
  )
}

export default App
