import React from "react";
import { View, Text, useWindowDimensions, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}

const Movieheader = ({ poster, originalTitle, title}: Props) => {
    const { height: ScreenHeight } = useWindowDimensions();
    return (
        <>
            <View style={{
                display: 'none'
            }} className="absolute z-10 top-20 left-2">
                <Pressable onPress={() => {router.dismiss()}}>
                    <Ionicons className="shadow"  name="arrow-back"  size={30}  color={'white'}/>
                </Pressable>
            </View>


            <View style={{ height: ScreenHeight * 0.7 }}>
                <View className="flex-1 rounded-b-lg overflow-hidden">
                    <Image style={{ flex: 1 }} source={{ uri: poster }} resizeMode='cover'/>
                </View>
            </View>

            <View className="px-5 mt-5">
                <Text className="font-normal ">{originalTitle}</Text>
                <Text className="font-semibold text-2xl">{title}</Text>
            </View>
        </>
    );
};
export default Movieheader;
