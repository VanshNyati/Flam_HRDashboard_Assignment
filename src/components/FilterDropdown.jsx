const FilterDropdown = ({ selectedDept, setSelectedDept, departments }) => {
  return (
    <select
      value={selectedDept}
      onChange={(e) => setSelectedDept(e.target.value)}
      className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
    >
      <option value="All">All Departments</option>
      {departments.map((dept) => (
        <option key={dept} value={dept}>
          {dept}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
