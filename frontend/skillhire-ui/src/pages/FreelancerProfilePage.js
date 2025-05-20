import { useParams } from "react-router-dom";

const FreelancerProfilePage = () => {
  const { id } = useParams();

  // Mock data
  const freelancer = {
    name: "Jane Doe",
    title: "Full Stack Developer",
    bio: "Experienced Java and React developer specializing in freelance marketplace platforms.",
    skills: ["Java", "Spring Boot", "React", "Tailwind"],
    rating: 4.9,
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-md mt-8">
      <h1 className="text-3xl font-bold mb-2">{freelancer.name}</h1>
      <p className="text-gray-600 mb-4">{freelancer.title}</p>

      <div className="text-yellow-500 mb-4">⭐ {freelancer.rating}/5</div>

      <p className="mb-4">{freelancer.bio}</p>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {freelancer.skills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <a
        href={`/booking/${id}`}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Book Freelancer
      </a>
    </div>
  );
};

export default FreelancerProfilePage;

