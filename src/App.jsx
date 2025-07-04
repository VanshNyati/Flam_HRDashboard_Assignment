import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookmarks from "./pages/Bookmarks";
import Analytics from "./pages/Analytics";
import EmployeeDetail from "./pages/EmployeeDetail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/analytics" element={<Analytics />} />{" "}
        <Route path="/employee/:id" element={<EmployeeDetail />} /> 
        {/* ✅ Ensure this line exists */}
      </Routes>
    </Router>
  );
}

export default App;
