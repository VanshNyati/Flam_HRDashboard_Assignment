import { useBookmark } from "../context/BookmarkContext";
import EmployeeCard from "../components/EmployeeCard";
import { Link } from "react-router-dom";
import { FaBookmark, FaArrowLeft, FaUsers, FaTrash } from "react-icons/fa";

const Bookmarks = () => {
  const { bookmarkedUsers, toggleBookmark, isUserBookmarked } = useBookmark();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-6">
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl">
                <FaBookmark className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Bookmarked Employees
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Your saved team members
                </p>
              </div>
            </div>
            
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <FaBookmark className="text-green-600 dark:text-green-400 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Bookmarked</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{bookmarkedUsers.length}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">Employees</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {bookmarkedUsers.length === 1 ? 'Employee' : 'Employees'}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        {bookmarkedUsers.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-12 text-center border border-gray-200 dark:border-gray-700">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <FaBookmark className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              No employees bookmarked yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Start bookmarking employees from the dashboard to see them here. 
              Your bookmarks will be saved and persist across sessions.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors"
            >
              <FaUsers className="mr-2" />
              Browse Employees
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Your Bookmarked Team
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <FaBookmark className="text-green-500" />
                <span>{bookmarkedUsers.length} bookmarked</span>
              </div>
            </div>

            {/* Employee Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bookmarkedUsers.map((user) => (
                <div key={user.id} className="relative group">
                  <EmployeeCard
                    user={user}
                    isBookmarked={isUserBookmarked(user.id)}
                    toggleBookmark={() => toggleBookmark(user)}
                  />
                  {/* Remove from bookmarks overlay */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleBookmark(user)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors"
                      title="Remove from bookmarks"
                    >
                      <FaTrash className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Manage Your Bookmarks
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Your bookmarks are automatically saved and will persist across sessions
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Link
                    to="/"
                    className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
                  >
                    <FaUsers className="mr-2" />
                    Browse More
                  </Link>
                  <Link
                    to="/analytics"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                  >
                    View Analytics
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
