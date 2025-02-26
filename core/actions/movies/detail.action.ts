import { movieApi } from "@/core/api/movie-api";
import { MovieDetails } from "@/core/infrastucture/interfaces/movies.interface";
import { MoviesdbDetailsResponse } from "@/core/infrastucture/interfaces/moviesdb-details-response";
import { MovieMapper } from "@/core/infrastucture/mappers/movie.mapper";

interface Props  {
    id : string
}


export const detailMoviesAction = async ({id}: Props): Promise<MovieDetails> => {
    try {
        const { data } = await movieApi.get<MoviesdbDetailsResponse>(`/${id}`);
        return MovieMapper.fromMovieDbDetailsToMovieDetails(data)
    } catch (error) {
        console.log(error);
        throw new Error("Can't load playing movies");
    }
};
