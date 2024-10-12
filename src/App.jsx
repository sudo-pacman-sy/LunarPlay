import HomePage from "./Homepage";
import InfoPage from "./infoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
