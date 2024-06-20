import Header from "../components/Header";
import Footer from "../components/Footer";

import PopularMoviesList from "../components/PopularMoviesList";

const HomeRoute = () => {
  return (
    <>
      <Header />
      <PopularMoviesList />
      <Footer />
    </>
  );
};
export default HomeRoute;
