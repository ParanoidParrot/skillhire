import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FreelancerListPage from "./pages/FreelancerListPage";
import FreelancerProfilePage from "./pages/FreelancerProfilePage";
import BookingPage from "./pages/BookingPage";
import DashboardPage from "./pages/DashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/freelancers" element={<FreelancerListPage />} />
    <Route path="/freelancer/:id" element={<FreelancerProfilePage />} />
    <Route path="/booking/:id" element={<BookingPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/admin" element={<AdminDashboardPage />} />
  </Routes>
);

export default AppRoutes;

