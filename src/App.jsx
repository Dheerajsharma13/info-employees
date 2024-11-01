import { useState } from "react";
import UserCard from "./components/UserCard";
import userData from "./data/users.json";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredUsers = userData.filter((user) => {
    return (
      (filter === "All" || user.status === filter) &&
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="p-10 bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen">
      <div className="flex flex-col items-center max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Employee Directory</h1>

        <input
          type="text"
          placeholder="Search by name or email"
          className="p-3 mb-6 w-full max-w-md rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex space-x-4 mb-8">
          {["All", "Active", "Inactive"].map((status) => (
            <button
              key={status}
              className={`px-5 py-2 rounded-full font-semibold transition duration-200 ${
                filter === status
                  ? "bg-blue-500 text-white shadow-lg hover:bg-blue-600"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
