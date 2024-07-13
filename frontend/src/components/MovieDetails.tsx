import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios.config";
import BackToHomepageBtn from "./BackToHomePageBtn";
import LoadingModal from "./LoadingModal";
import { MediaDetails } from "../type/types";

const MovieDetails = () => {
  const [movieDetailsData, setMovieDetailsData] = useState<MediaDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams<{ movieId: string }>();

  const getMovieDetails = async () => {
    try {
      const response = await API.get(`movie/${movieId}`);
      const data = response.data;
      setMovieDetailsData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  if (loading) {
    return <LoadingModal />;
  }

  if (!movieDetailsData) {
    return <p>Movie details not available</p>;
  }

  return (
    <>
      <BackToHomepageBtn />
      <div>
        <div className="flex justify-between items-center mt-[50px] mb-[30px] mx-0">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetailsData.poster_path}`}
              className=" min-w-[400px] h-full object-cover pr-[60px]"
              alt={movieDetailsData.title}
            />
          </div>
          <div>
            <h2 className="text-3xl text-center font-semibold ">
              {movieDetailsData.title}
            </h2>
            <p className="mx-0 my-5">
              <i className="fas fa-star" /> {movieDetailsData.vote_average} / 10
              : ({movieDetailsData.vote_count} reviewers)
            </p>
            <p className="my-4">
              Release Date: {movieDetailsData.release_date}
            </p>
            <p>{movieDetailsData.overview}</p>
            <h5 className=" font-bold mt-4">Genres:</h5>
            <ul className="flex space-x-3">
              {movieDetailsData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <a
              href={movieDetailsData.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border bg-[var(--color-secondary)] text-black cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] px-4 py-2 rounded-[5px] border-solid my-4"
            >
              Visit Movie Homepage
            </a>
          </div>
        </div>
        <div className="details-bottom">
          <h2 className="text-3xl text-center ">Movie Info</h2>
          <ul>
            <li className="mx-0 my-[15px] pb-2 border-b-white border-b border-solid border-[rgba(255,255,255,0.1)]">
              <span className="text-[color:var(--color-secondary)]">
                Budget:
              </span>{" "}
              ${movieDetailsData.budget}
            </li>
            <li className="mx-0 my-[15px] pb-2 border-b-white border-b border-solid border-[rgba(255,255,255,0.1)]">
              <span className="text-[color:var(--color-secondary)]">
                Revenue:
              </span>{" "}
              ${movieDetailsData.revenue}
            </li>
            <li className="mx-0 my-[15px] pb-2 border-b-white border-b border-solid border-[rgba(255,255,255,0.1)]">
              <span className="text-[color:var(--color-secondary)]">
                Runtime:
              </span>{" "}
              {movieDetailsData.runtime} minutes
            </li>
            <li className="mx-0 my-[15px] pb-2 border-b-white border-b border-solid border-[rgba(255,255,255,0.1)]">
              <span className="text-[color:var(--color-secondary)]">
                Status:
              </span>{" "}
              {movieDetailsData.status}
            </li>
          </ul>
          <h4>Production Companies</h4>
          <div>
            {movieDetailsData.production_companies.map((data) => (
              <span key={data.id}>/ {data.name} </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
