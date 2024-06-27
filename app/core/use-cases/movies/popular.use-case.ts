import { HttaAdpter } from "@/app/config/adapters/http/http.adapter";
import { MovieDBMoviesResponse,} from "@/app/infrastructure/interfaces/moivie-db.responses";
import type { Movie } from "../../entities/movies.entity";
import { MovieMapper } from "@/app/infrastructure/mappers/movie.mapper";


interface Options{
    page?: number;
    limit?:number;
}

export const moviesPopularUseCase = async (
  fetcher: HttaAdpter,options?:Options
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBMoviesResponse>("/popular",{
        params:{
            page:options?.page ?? 1
        }
    });
    return popular.results.map(MovieMapper.fromMovieDBResultToEntity)
    
  } catch (error) {
    console.log(error);
    throw new Error("error fetching movies - PopularUseCase");
  }
};
