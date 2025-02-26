import { movieApi } from "@/core/api/movie-api";
import { type MoviesdbResponse } from "@/core/infrastucture/interfaces/moviesdb-response";
import { OptionsRequest } from "@/core/infrastucture/interfaces/request-movies-option.interface";
import { MovieMapper } from "@/core/infrastucture/mappers/movie.mapper";


export const UpComingAction = async ({page = 1 , limit = 10}: OptionsRequest) => {
    try {
        const { data } = await movieApi.get<MoviesdbResponse>("/upcoming", {
            params: {
                page: page
            }
        });
        // console.log(JSON.stringify((data.results.map(MovieMapper.fromMovieDbToMovie)), null, 2))
        return data.results.map(MovieMapper.fromMovieDbToMovie);
    } catch (error) {
        console.log(error);
        throw new Error("Can't load playing movies");
    }
};
