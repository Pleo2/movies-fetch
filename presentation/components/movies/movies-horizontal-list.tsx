import {
    View,
    Text,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent
} from "react-native";
import { type Movie } from "@/core/infrastucture/interfaces/movies.interface";
import MoviePoster from "./movies-poster";
import { useEffect, useRef } from "react";

interface Props {
    movies: Movie[];
    title: string;
    loadNextPage?: () => void;
}

const MoviesHorizontalList = ({ movies, title, loadNextPage }: Props) => {
    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false
        }, 200);
    }, [movies])



    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;
        const { contentOffset, layoutMeasurement, contentSize } =
            event.nativeEvent;
        const isEndReached =
            contentOffset.x + layoutMeasurement.width + 600 >=
            contentSize.width; // determina si estas cerca del final del scroll

        if (isEndReached) return;
        isLoading.current = true;

        loadNextPage && loadNextPage();
    };

    return (
        <View style={{ marginBottom: 20 }}>
            <Text
                className="text-2xl text-white px-6 font-semibold"
                style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 20
                }}
            >
                {title}
            </Text>
            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator
                keyExtractor={(item, index) => `${item.id}${index}`}
                renderItem={({ item }) => (
                    <MoviePoster
                        id={item.id}
                        poster={item.poster}
                        width={100}
                        height={150}
                        smallPoster
                    />
                )}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                className="mt-2 h-max"
                onScroll={onScroll}
            />
        </View>
    );
};
export default MoviesHorizontalList;
