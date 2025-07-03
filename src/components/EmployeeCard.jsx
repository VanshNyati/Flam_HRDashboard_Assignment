import { FaStar, FaBookmark, FaRegBookmark } from "react-icons/fa";

const EmployeeCard = ({ user, isBookmarked, toggleBookmark }) => {
  const { firstName, lastName, email, age, department, rating, image, id } =
    user;

  return (
    <div className="bg-gray-800 text-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 p-6 flex flex-col justify-between">
      {/* Profile */}
      <div className="flex flex-col items-center gap-3">
        <img
          src={image}
          alt={`${firstName} ${lastName}`}
          className="w-24 h-24 rounded-full border-4 border-indigo-500 object-cover"
        />
        <div className="text-center space-y-1">
          <h2 className="text-lg font-bold">
            {firstName} {lastName}
          </h2>
          <p className="text-sm text-gray-300 truncate max-w-[200px]">
            {email}
          </p>
          <p className="text-sm text-gray-400">Age: {age}</p>
          <p className="text-sm text-indigo-400 font-semibold">
            Dept: {department}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center mt-3">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`h-4 w-4 transition ${
              i < rating ? "text-yellow-400" : "text-gray-500"
            }`}
          />
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-5 space-x-2 text-xs sm:text-sm">
        {/* View */}
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 transition text-white py-1.5 rounded-lg font-medium shadow-sm">
          View
        </button>

        {/* Bookmark */}
        <button
          onClick={() => toggleBookmark(id)}
          className={`flex-1 flex items-center justify-center gap-1 transition py-1.5 rounded-lg font-medium shadow-sm ${
            isBookmarked
              ? "bg-green-600 hover:bg-green-700"
              : "bg-emerald-600 hover:bg-emerald-700"
          } text-white`}
        >
          {isBookmarked ? (
            <FaBookmark className="w-4 h-4" />
          ) : (
            <FaRegBookmark className="w-4 h-4" />
          )}
          {isBookmarked ? "Bookmarked" : "Bookmark"}
        </button>

        {/* Promote */}
        <button className="flex-1 bg-purple-600 hover:bg-purple-700 transition text-white py-1.5 rounded-lg font-medium shadow-sm">
          Promote
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
