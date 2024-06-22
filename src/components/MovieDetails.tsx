import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios.config";
import BackToHomepageBtn from "./BackToHomePageBtn";
import LoadingModal from "./LoadingModal";

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  name: string;
}

interface MovieDetails {
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  overview: string;
  genres: Genre[];
  homepage: string;
  budget: number;
  revenue: number;
  runtime: number;
  status: string;
  production_companies: ProductionCompany[];
}

const MovieDetails = () => {
  const [movieDetailsData, setMovieDetailsData] = useState<MovieDetails | null>(
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
    <section className="container">
      <BackToHomepageBtn />
      <div id="movie-details">
        <div className="details-top">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetailsData.poster_path}`}
              className="card-img-top"
              alt={movieDetailsData.title}
            />
          </div>
          <div>
            <h2>{movieDetailsData.title}</h2>
            <p>
              <i className="fas fa-star text-primary" />{" "}
              {movieDetailsData.vote_average} / 10 : (
              {movieDetailsData.vote_count} reviewers)
            </p>
            <p className="text-muted">
              Release Date: {movieDetailsData.release_date}
            </p>
            <p>{movieDetailsData.overview}</p>
            <h5>Genres</h5>
            <ul className="list-group">
              {movieDetailsData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <a
              href={movieDetailsData.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Visit Movie Homepage
            </a>
          </div>
        </div>
        <div className="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li>
              <span className="text-secondary">Budget:</span> $
              {movieDetailsData.budget}
            </li>
            <li>
              <span className="text-secondary">Revenue:</span> $
              {movieDetailsData.revenue}
            </li>
            <li>
              <span className="text-secondary">Runtime:</span>{" "}
              {movieDetailsData.runtime} minutes
            </li>
            <li>
              <span className="text-secondary">Status:</span>{" "}
              {movieDetailsData.status}
            </li>
          </ul>
          <h4>Production Companies</h4>
          <div className="list-group">
            {movieDetailsData.production_companies.map((data) => (
              <span key={data.id}>/ {data.name} </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
