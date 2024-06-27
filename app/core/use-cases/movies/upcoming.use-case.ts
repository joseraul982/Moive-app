import { HttaAdpter } from "@/app/config/adapters/http/http.adapter";
import { MovieDBMoviesResponse,} from "@/app/infrastructure/interfaces/moivie-db.responses";
import type { Movie } from "../../entities/movies.entity";
import { MovieMapper } from "@/app/infrastructure/mappers/movie.mapper";

export const moviesUpcomingUseCase = async (
  fetcher: HttaAdpter
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBMoviesResponse>("/upcoming");
    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity)
    
  } catch (error) {
    console.log(error);
    throw new Error("error fetching movies - UpcomingUseCase");
  }
};
