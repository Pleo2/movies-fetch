import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/core/infrastucture/interfaces/cast-movies.interface";
import { MoviedbCastResponse } from "@/core/infrastucture/interfaces/moviedb-cast-response";
import { CastMapper } from "@/core/infrastucture/mappers/cast.mapper";

interface Props  {
    id : string
}


export const movieCastAction = async ({id}: Props): Promise<Cast[]> => {
    try {
        const { data } = await movieApi.get<MoviedbCastResponse>(`/${id}/credits`);
        return data.cast.map(CastMapper.fromMovieDbCastMovieToCast)
    } catch (error) {
        console.log(error);
        throw new Error("Can't load playing movies");
    }
};
