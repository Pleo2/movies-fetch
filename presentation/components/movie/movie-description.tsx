import { MovieDetails } from '@/core/infrastucture/interfaces/movies.interface'
import { View, Text } from 'react-native'

interface Props {
    movie: MovieDetails;
}

const MovieDescription = ({movie}: Props) => {
  return (
    <View className='mx-6'>
        <View className='flex flex-row mt-4'>
            <Text className='text-xl font-Geist-bold text-white'>{movie.rating}</Text>
            <Text className='text-xl text-white font-Geist-regular'> - {movie.genres.join(', ')}</Text>
        </View>
        <Text className="text-4xl font-Geist-bold text-white mt-4">Overview</Text>
        <Text className='text-lg text-white mt-4 font-Geist-medium'>{movie.description}</Text>

        <View className='mt-4 flex flex-row items-center'>
            <Text className='text-xl  text-white font-Geist-medium'>Release Date:</Text>
            <Text className='text-xl bg-sky-500 rounded-full px-2 ml-2 text-white font-Geist-medium'> {`${movie.releaseDate.getDay()}/ ${movie.releaseDate.getMonth()} / ${movie.releaseDate.getFullYear()}`}</Text>
        </View>

        <View className='mt-4 flex flex-row items-center'>
            <Text className='text-xl font-Geist-medium text-white'>Budget:</Text>
            <Text className='text-xl bg-green-500 rounded-full px-2 ml-2 text-white font-Geist-medium'>{Formatter.currency(movie.budget)}</Text>
        </View>
    </View>
  )
}
export default MovieDescription


class Formatter {
    public static currency(value: number): string {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    }
  }
