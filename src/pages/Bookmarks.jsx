import { useBookmark } from "../context/BookmarkContext";
import EmployeeCard from "../components/EmployeeCard";
import { Link } from "react-router-dom";

const Bookmarks = () => {
  const { bookmarkedUsers, toggleBookmark, isUserBookmarked } = useBookmark();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6">
      <div className="flex justify-end mb-4">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
        >
          Back to Dashboard
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        🔖 Bookmarked Employees
      </h1>

      {bookmarkedUsers.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No employees bookmarked yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bookmarkedUsers.map((user) => (
            <EmployeeCard
              key={user.id}
              user={user}
              isBookmarked={isUserBookmarked(user.id)} // ✅ Ensure it shows as bookmarked
              toggleBookmark={() => toggleBookmark(user)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
