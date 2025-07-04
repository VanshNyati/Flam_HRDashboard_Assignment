import { useLocation, useParams, useNavigate } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const user = state?.user;

  if (!user) {
    return (
      <div className="p-6 text-center text-red-500">
        No user data found. Please go back to the dashboard.
        <br />
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => navigate("/")}
        >
          ⬅ Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 space-y-6">
        <div className="flex items-center space-x-6">
          <img
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-28 h-28 rounded-full border-4 border-indigo-500 object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-500 dark:text-gray-300">{user.email}</p>
            <p className="text-sm text-indigo-500 font-medium">
              Department: {user.department}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>City:</strong> {user.address?.city}
          </p>
          <p>
            <strong>Company:</strong> {user.company?.name}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
