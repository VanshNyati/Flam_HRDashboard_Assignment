import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import { getRandomDepartment, getRandomRating } from "../utils/helpers";
import { departments } from "../data/departments";
import { useBookmark } from "../context/BookmarkContext";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const { toggleBookmark, isUserBookmarked } = useBookmark();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users?limit=20");
        const data = await res.json();

        const enhancedUsers = data.users.map((user) => ({
          ...user,
          department: getRandomDepartment(),
          rating: getRandomRating(),
        }));

        setEmployees(enhancedUsers);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter((user) => {
    const lower = searchTerm.toLowerCase();
    const matchesSearch =
      user.firstName.toLowerCase().includes(lower) ||
      user.lastName.toLowerCase().includes(lower) ||
      user.email.toLowerCase().includes(lower) ||
      user.department.toLowerCase().includes(lower);

    const matchesDept =
      selectedDept === "All" || user.department === selectedDept;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6">
      {/* Top Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <Link
          to="/bookmarks"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
        >
          🔖 View Bookmarked Employees
        </Link>
        <Link
          to="/analytics"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
        >
          📊 View Analytics
        </Link>
      </div>

      {/* Header: Title + Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          🚀 HR Dashboard
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterDropdown
            selectedDept={selectedDept}
            setSelectedDept={setSelectedDept}
            departments={departments}
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEmployees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            user={emp}
            isBookmarked={isUserBookmarked(emp.id)}
            toggleBookmark={() => toggleBookmark(emp)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
