
import { movieCastAction } from "@/core/actions/cast/movie-cast.action";
import { useQuery } from "@tanstack/react-query";

const useCast = (id: string) => {
    const castsQuery = useQuery({
        queryKey: ["casts", "artist"],
        queryFn: () => movieCastAction({id : id}),
        staleTime: 1000, // cache de 24 horas
    });

    return { castsQuery };
};
export default useCast;
