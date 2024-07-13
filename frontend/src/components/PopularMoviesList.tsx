import { useEffect, useState } from "react";
import API from "../api/axios.config";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}

const PopularMoviesList = () => {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);

  const displayPopularMovies = async () => {
    try {
      const { data } = await API.get("movie/popular");
      setMoviesData(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    displayPopularMovies();
  }, []);

  return (
    <>
      <h2>Popular Movies</h2>
      <div
        id="popular-movies"
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5"
      >
        {moviesData.map((data) => (
          <div
            className="p-[5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:scale-105 bg-blue-700 hover:bg-blue-900"
            key={data.id}
          >
            <Link to={`movie-details/${data.id}`}>
              {data.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  className="w-full"
                  alt={data.title}
                />
              ) : (
                <img
                  src="../assets/no-image.jpg"
                  className="w-full"
                  alt={data.title}
                />
              )}
            </Link>
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">
                <small className="text-muted">
                  Release: {data.release_date}
                </small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularMoviesList;
