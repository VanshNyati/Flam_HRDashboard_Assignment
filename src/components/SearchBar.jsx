const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by name, email, department..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full md:w-96 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
    />
  );
};

export default SearchBar;
