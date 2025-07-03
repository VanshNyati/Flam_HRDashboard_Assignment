import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookmarks from "./pages/Bookmarks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </Router>
  );
}

export default App;
