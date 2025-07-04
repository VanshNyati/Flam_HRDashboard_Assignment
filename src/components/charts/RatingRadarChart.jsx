import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const RatingRadarChart = ({ employees }) => {
  const ratingCount = Array(5).fill(0); // [0,0,0,0,0]

  employees.forEach((emp) => {
    ratingCount[emp.rating - 1]++;
  });

  const data = ratingCount.map((count, i) => ({
    rating: `${i + 1} ⭐`,
    count,
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-white">
        Performance Rating Overview
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="rating" />
          <Radar
            name="Rating"
            dataKey="count"
            stroke="#6366F1"
            fill="#6366F1"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingRadarChart;
