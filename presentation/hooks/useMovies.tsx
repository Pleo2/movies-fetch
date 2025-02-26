import { nowPlayingAction } from "@/core/actions/movies/now-playin.action";
import { PopularMoviesAction } from "@/core/actions/movies/popular.action";
import { TopRatedAction } from "@/core/actions/movies/top-rated.action";
import { UpComingAction } from "@/core/actions/movies/up-coming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ["movies", "nowPlayin", 2],
        queryFn: () => nowPlayingAction({ page: 2}),
        staleTime: 1000 * 60 * 60 * 24 // 24 horas
    });
    const popularQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["movies", "popular"],
        queryFn: ({pageParam,}) => {
            return PopularMoviesAction({ page: pageParam})
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1
    });
    const topRatedQuery = useQuery({
        queryKey: ["movies", "topRated"],
        queryFn: () => TopRatedAction({ page: 1}),
        staleTime: 1000 * 60 * 60 * 24 // 24 horas
    });
    const upComingQuery = useQuery({
        queryKey: ["movies", "upComing"],
        queryFn: () => UpComingAction({ page: 1}),
        staleTime: 1000 * 60 * 60 * 24 // 24 horas
    });

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upComingQuery
    };
};
