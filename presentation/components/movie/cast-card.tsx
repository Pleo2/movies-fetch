import { View, Text, Image } from 'react-native';
interface Props {
  avatar: string;
  name: string;
  Character: string;
}

const CastCard = ({ avatar, name, Character }: Props) => {
  return (
    <View className="flex-1 mr-4">
      <Image
        source={{ uri: avatar }}
        style={{
          width: 100,
          height: 130,
          resizeMode: 'cover',
          borderRadius: 8,
        }}
      />
      <View className="mt-2 items-center justify-start">
    <Text className="mt-2 text-center text-white max-w-[80px] text-sm font-Geist-medium" >{name}</Text>
    <Text className="text-center text-xs text-gray-500  max-w-[80px] font-Geist-regular">{Character}</Text>
      </View>
    </View>
  );
};
export default CastCard;
