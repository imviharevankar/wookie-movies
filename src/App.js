import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
