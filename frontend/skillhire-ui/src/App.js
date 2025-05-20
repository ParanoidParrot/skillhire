import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* NAVIGATION BAR */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-blue-600">SkillHire</div>
            <div className="space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/freelancers" className="text-gray-700 hover:text-blue-600">Freelancers</Link>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              <Link to="/signup" className="text-gray-700 hover:text-blue-600">Signup</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
            </div>
          </div>
        </nav>

        {/* PAGE ROUTES */}
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;

