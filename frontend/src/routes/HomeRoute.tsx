import PopularMoviesList from "../components/PopularMoviesList";

const HomeRoute = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center my-3">Popular Movies</h2>
      </div>
      <PopularMoviesList />
    </>
  );
};
export default HomeRoute;
