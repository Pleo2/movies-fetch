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
import MainSlideShow from "@/presentation/components/main-slide-show";
import MoviesHorizontalList from "@/presentation/components/movies-horizontal-list";

export default function HomeScreen() {
    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, upComingQuery, topRatedQuery } = useMovies();

    return (
        <View
            style={{
                paddingTop: safeArea.top,
                flex: 1,
                backgroundColor: "black"
            }}
        >
            {nowPlayingQuery.isLoading ? (
                <Loading />
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

const Loading = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator size={30} />
        </View>
    );
};
