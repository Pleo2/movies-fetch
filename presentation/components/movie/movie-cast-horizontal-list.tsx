import { View, Text, FlatList } from 'react-native';
import { Cast } from '@/core/infrastucture/interfaces/cast-movies.interface';
import CastCard from './cast-card';

interface Props {
  cast: Cast[];
}

const MovieCastHorizontalList = ({ cast }: Props) => {
  return (
    <View className="mb-4 mt-4">
        <Text className="text-white text-4xl font-Geist-bold">Cast</Text>
      <FlatList
        horizontal
        data={cast}
        showsHorizontalScrollIndicator
        keyExtractor={(item, index) => `${item.id}${index}`}
        renderItem={({ item }) => (
          <CastCard avatar={item.avatar} name={item.name} Character={item.character} />
        )}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        className="mt-4 h-max"
      />
    </View>
  );
};
export default MovieCastHorizontalList;
