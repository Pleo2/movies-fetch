import { detailMoviesAction } from "@/core/actions/movies/detail.action";
import { useQuery } from "@tanstack/react-query";

const useMovie = (id: string) => {
    const movieDetailsQuery = useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => detailMoviesAction({id : id}),
    staleTime: 1000 * 60 * 60 * 24, // cache de 24 horas
    });

    return { movieDetailsQuery };
};
export default useMovie;
