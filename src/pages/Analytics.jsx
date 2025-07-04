import { useEffect, useState } from "react";
import { getRandomDepartment, getRandomRating } from "../utils/helpers";
import DepartmentBarChart from "../components/charts/DepartmentBarChart";
import GenderPieChart from "../components/charts/GenderPieChart";
import RatingRadarChart from "../components/charts/RatingRadarChart";
import { Link } from "react-router-dom";

const Analytics = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users?limit=20");
        const data = await res.json();

        const enhanced = data.users.map((user) => ({
          ...user,
          department: getRandomDepartment(),
          rating: getRandomRating(),
        }));

        setEmployees(enhanced);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        📈 Analytics Dashboard
      </h1>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DepartmentBarChart employees={employees} />
        <GenderPieChart employees={employees} />
        <div className="md:col-span-2">
          <RatingRadarChart employees={employees} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
