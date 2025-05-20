import { Link } from "react-router-dom";

const SidebarLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r">
        <div className="p-6 font-bold text-xl text-blue-600">SkillHire</div>
        <nav className="px-6 space-y-3">
          <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/dashboard/bookings" className="block text-gray-700 hover:text-blue-600">My Bookings</Link>
          <Link to="/dashboard/profile" className="block text-gray-700 hover:text-blue-600">Edit Profile</Link>
          <Link to="/logout" className="block text-gray-700 hover:text-red-500">Logout</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;

