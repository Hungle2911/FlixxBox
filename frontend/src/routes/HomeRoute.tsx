import PopularMediaList from "../components/PopularMediaList";

const HomeRoute = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center my-3">Popular Movies</h2>
      </div>
      <PopularMediaList />
    </>
  );
};
export default HomeRoute;
