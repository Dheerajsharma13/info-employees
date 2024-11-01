export default function UserCard({ user }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col items-center text-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500 shadow-md"
        />
        <h2 className="font-bold text-lg text-gray-800 mb-1">{user.name}</h2>
        <p className="text-gray-500 text-sm mb-2">{user.role}</p>
        <p className="text-gray-600 mb-4">{user.email}</p>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="px-4 py-2 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition duration-200 shadow-md">
          Block
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition duration-200 shadow-md">
          Details
        </button>
      </div>
    </div>
  );
}
