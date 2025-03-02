import {
    Image,
    StyleSheet,
    Platform,
    Text,
    ActivityIndicator,
    ScrollView,
    View
} from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/movies/main-slide-show";
import MoviesHorizontalList from "@/presentation/components/movies/movies-horizontal-list";
import LoadingIndicator from "@/presentation/components/ui/loading-indicator";

export default function HomeScreen() {
    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, upComingQuery, topRatedQuery } = useMovies();
    const PaddingTop = `padding-top-[${safeArea.top}]`;
    return (
        <View
            className={`flex-1 bg-black ${PaddingTop} `}
        >
            {nowPlayingQuery.isLoading ? (
                <LoadingIndicator />
            ) : (
                <ScrollView className="h-max">
                    <MainSlideShow
                        movies={nowPlayingQuery.data ?? []}
                    ></MainSlideShow>
                    <MoviesHorizontalList
                        movies={upComingQuery.data ?? []}
                        title="Up Coming"
                    />
                     <MoviesHorizontalList
                        movies={popularQuery.data?.pages.flat() ?? []}
                        title="Popular"
                        loadNextPage={ popularQuery.fetchNextPage}
                    />
                    <MoviesHorizontalList
                        movies={topRatedQuery.data ?? []}
                        title="Top Rated"
                    />
                </ScrollView>
            )}
        </View>
    );
}
