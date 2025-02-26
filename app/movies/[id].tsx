import { detailMoviesAction } from '@/core/actions/movies/detail.action';
import { type MovieDetails } from '@/core/infrastucture/interfaces/movies.interface';
import Movieheader from '@/presentation/components/movie/movie-header';
import LoadingIndicator from '@/presentation/components/ui/loading-indicator';
import useMovie from '@/presentation/hooks/useMovie';
import { useMovies } from '@/presentation/hooks/useMovies';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { View, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TestComponent from '@/presentation/components/TestComponent';
import React from 'react';
import MovieDescription from '@/presentation/components/movie/movie-description';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import useCast from '@/presentation/hooks/useCasts';
import MovieCastTabList from '@/presentation/components/movie/movie-cast-horizontal-list';
import CastCard from '@/presentation/components/movie/cast-card';
import MovieCastHorizontalList from '@/presentation/components/movie/movie-cast-horizontal-list';

const MoviesDetails = () => {
  const { id } = useLocalSearchParams();
  const stringId = id.toString();
  const {
    movieDetailsQuery: { data, isLoading },
  } = useMovie(stringId);

  const {
    castsQuery: { data: dataCast, isLoading: isLoadinCast },
  } = useCast(stringId);

  if (isLoading || !data) {
    return <LoadingIndicator />;
  }

  return (
    <View className="flex-1">
      <View className="absolute left-5 top-14 z-10">
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons className="shadow" name="arrow-back" size={30} color={'white'} />
        </Pressable>
      </View>
      <ScrollView style={{ backgroundColor: '#000' }}>
        <View style={{ flex: 1, paddingBottom: 12, backgroundColor: '#000' }}>
          <Movieheader poster={data.poster} originalTitle={data.originalTitle} title={data.title} />
          <MovieDescription movie={data} />
          {isLoadinCast || !dataCast ? (
            <View className='h-56'>
              <LoadingIndicator />
            </View>
          ) : (
            <View className="mt-4 ml-7">
                <MovieCastHorizontalList cast={dataCast}/>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
export default MoviesDetails;
