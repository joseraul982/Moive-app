import { HttaAdpter } from "@/app/config/adapters/http/http.adapter";
import { MovieDBMoviesResponse,} from "@/app/infrastructure/interfaces/moivie-db.responses";
import type { Movie } from "../../entities/movies.entity";
import { MovieMapper } from "@/app/infrastructure/mappers/movie.mapper";

export const moviesTopRatedUseCase = async (
  fetcher: HttaAdpter
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBMoviesResponse>("/top_rated");
    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity)
    
  } catch (error) {
    console.log(error);
    throw new Error("error fetching movies - TopRated");
  }
};
