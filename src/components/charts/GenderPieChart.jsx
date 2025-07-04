import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const GenderPieChart = ({ employees }) => {
  const genderCount = employees.reduce(
    (acc, emp) => {
      acc[emp.gender] = (acc[emp.gender] || 0) + 1;
      return acc;
    },
    { male: 0, female: 0 }
  );

  const data = [
    { name: "Male", value: genderCount.male },
    { name: "Female", value: genderCount.female },
  ];

  const COLORS = ["#3B82F6", "#EC4899"];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-white">
        Gender Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderPieChart;
