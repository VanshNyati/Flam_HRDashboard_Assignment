import { useBookmark } from "../context/BookmarkContext";
import EmployeeCard from "../components/EmployeeCard";

const Bookmarks = () => {
  const { bookmarkedUsers } = useBookmark();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        🔖 Bookmarked Employees
      </h1>

      {bookmarkedUsers.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No employees bookmarked yet.
        </p>
      ) : (
        <div className="employee-list">
          {bookmarkedUsers.map((user) => (
            <EmployeeCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
