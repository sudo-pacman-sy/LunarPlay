import HomePage from "./pages/homepage/Homepage";
import MovieInfo from "./pages/details/MovieInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
