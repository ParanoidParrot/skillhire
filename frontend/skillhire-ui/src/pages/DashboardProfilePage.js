import { useState } from "react";
import SidebarLayout from "../components/SidebarLayout";

const DashboardProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "Jane Doe",
    email: "jane@example.com",
    bio: "Experienced full-stack developer with a passion for building freelance marketplaces.",
    skills: "Java, React, Spring Boot, TailwindCSS",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile saved:", formData); // Later, this will send data to backend
    alert("Profile updated!");
  };

  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

      <form className="space-y-5 max-w-2xl" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Skills (comma separated)</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Save Profile
        </button>
      </form>
    </SidebarLayout>
  );
};

export default DashboardProfilePage;
        
