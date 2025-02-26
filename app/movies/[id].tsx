import { detailMoviesAction } from "@/core/actions/movies/detail.action";
import { type MovieDetails } from "@/core/infrastucture/interfaces/movies.interface";
import Movieheader from "@/presentation/components/movie/movie-header";
import LoadingIndicator from "@/presentation/components/ui/loading-indicator";
import useMovie from "@/presentation/hooks/useMovie";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TestComponent from "@/presentation/components/TestComponent";
import React from "react";

const MoviesDetails = () => {
    const { id } = useLocalSearchParams();
    const {
        movieDetailsQuery: { data, isLoading }
    } = useMovie(id.toString());

    if (isLoading || !data ) {
        return <LoadingIndicator/>
    }

    return (
            <>
            <Movieheader poster={data.poster} originalTitle={data.originalTitle} title={data.title} />
            <TestComponent />
            </>
    )
};
export default MoviesDetails;
