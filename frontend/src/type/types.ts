export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
}

export interface MediaDetails {
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

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}
