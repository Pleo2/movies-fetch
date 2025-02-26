import { Cast } from "../interfaces/cast-movies.interface";
import { Actor, MoviedbCastResponse } from "../interfaces/moviedb-cast-response";
import { Movie, MovieDetails } from "../interfaces/movies.interface";
import { MoviesdbDetailsResponse } from "../interfaces/moviesdb-details-response";
import { Result } from "../interfaces/moviesdb-response";

export class CastMapper {
    static fromMovieDbCastMovieToCast = (actor: Actor):Cast => {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? "NO CHARACTER",
            avatar: actor.profile_path ? "https://image.tmdb.org/t/p/w500" + actor.profile_path : 'https://i.stack.imgur.com/l60Hf.png'
        }
    }
}
