import { HttaAdpter } from "@/app/config/adapters/http/http.adapter";
import { NowPlayingResponse } from "@/app/infrastructure/interfaces/moivie-db.responses";
import type { Movie } from "../../entities/movies.entity";
import { MovieMapper } from "@/app/infrastructure/mappers/movie.mapper";

export const moviesNowPlayingUseCase = async (
  fetcher: HttaAdpter
): Promise<Movie[]> => {
  try {
    const nowPlayingResponse = await fetcher.get<NowPlayingResponse>("/now_playing");
    return nowPlayingResponse.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.error("Error fetching movies - NowPlaying:", error);
    throw new Error("Error fetching now playing movies");
  }
};
