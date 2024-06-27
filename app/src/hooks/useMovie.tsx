import { useEffect, useState } from "react";
import * as UseCases from "../../core/use-cases";
import { FullMovie } from "@/app/core/entities/movies.entity";
import { movieDBFetcher } from "@/app/config/adapters/movieDB.adapter";
import { Cast } from "@/app/core/entities/cast.entity";

const useMovie = (movieId: number) => {
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setLoading(true);

    const fullMoviePromise = UseCases.getMovieBYUseCase(
      movieDBFetcher,
      movieId
    );

    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);

    const [fullMovie, cast] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    setMovie(fullMovie);
    setCast(cast);
    setLoading(false);
  };

  return {
    isLoading,
    movie,
    cast,
  };
};

export default useMovie;
