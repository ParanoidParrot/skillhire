import FreelancerCard from "../components/FreelancerCard";

const mockFreelancers = [
  { name: "Jane Doe", skills: ["React", "Node.js"], rating: 4.8 },
  { name: "John Smith", skills: ["Java", "Spring Boot"], rating: 4.5 },
];

const FreelancerListPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Freelancers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockFreelancers.map((f, idx) => (
          <FreelancerCard key={idx} {...f} />
        ))}
      </div>
    </div>
  );
};

export default FreelancerListPage;

