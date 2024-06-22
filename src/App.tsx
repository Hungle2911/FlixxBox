import { Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import MovieDetailPage from "./routes/MovieDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/movie-details" element={<MovieDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
