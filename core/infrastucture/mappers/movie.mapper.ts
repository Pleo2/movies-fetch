import { Movie, MovieDetails } from "../interfaces/movies.interface";
import { MoviesdbDetailsResponse } from "../interfaces/moviesdb-details-response";
import { Result } from "../interfaces/moviesdb-response";

export class MovieMapper {
    static fromMovieDbToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            backdrop: "ttps://image.tmdb.org/t/p/w500" + movie.backdrop_path
        }
    }

    static fromMovieDbDetailsToMovieDetails = (movie: MoviesdbDetailsResponse): MovieDetails => {
    return {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        releaseDate: new Date(movie.release_date),
        rating: movie.vote_average,
        poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        backdrop: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path,
        genres: movie.genres.map(genre => genre.name),
        duration: movie.runtime,
        budget: movie.budget,
        originalTitle: movie.original_title,
        productionCompanies: movie.production_companies.map(company => company.name)
    }
    }

}
