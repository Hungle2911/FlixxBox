import { Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import MovieDetailPage from "./routes/MovieDetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <section className="max-w-[1200px] min-h-screen w-full mx-auto my-0 px-5 py-0">
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/movie-details/:movieId" element={<MovieDetailPage />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
