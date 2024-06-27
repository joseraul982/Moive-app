import { HttaAdpter } from "@/app/config/adapters/http/http.adapter";
import { FullMovie } from "../../entities/movies.entity";
import { MovieDBMovie } from "@/app/infrastructure/interfaces/moivie-db.responses";
import { MovieMapper } from "@/app/infrastructure/mappers/movie.mapper";

export const getMovieBYUseCase = async(
    fetcher:HttaAdpter,
    movieId:number,
):Promise<FullMovie> =>{

    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

        const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
        return fullMovie
        
    } catch (error) {
        throw new Error(`Cannot get movie by id ${movieId}`)
        
    }
}
