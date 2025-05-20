const FreelancerCard = ({ name, skills, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">Skills: {skills.join(", ")}</p>
      <div className="mt-2 text-yellow-500">⭐ {rating}/5</div>
    </div>
  );
};

export default FreelancerCard;

