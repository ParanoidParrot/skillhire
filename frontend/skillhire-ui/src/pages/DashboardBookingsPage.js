import SidebarLayout from "../components/SidebarLayout";

const bookings = [
  {
    id: 1,
    client: "Alice",
    freelancer: "Jane Doe",
    service: "Build React App",
    date: "2025-05-25",
    status: "Confirmed",
  },
  {
    id: 2,
    client: "Bob",
    freelancer: "Jane Doe",
    service: "Spring Boot Backend",
    date: "2025-06-01",
    status: "Pending",
  },
];

const DashboardBookingsPage = () => {
  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
              <th className="py-2 px-4 border-b">Client</th>
              <th className="py-2 px-4 border-b">Freelancer</th>
              <th className="py-2 px-4 border-b">Service</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="text-sm text-gray-800">
                <td className="py-2 px-4 border-b">{booking.client}</td>
                <td className="py-2 px-4 border-b">{booking.freelancer}</td>
                <td className="py-2 px-4 border-b">{booking.service}</td>
                <td className="py-2 px-4 border-b">{booking.date}</td>
                <td className="py-2 px-4 border-b">{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SidebarLayout>
  );
};

export default DashboardBookingsPage;
