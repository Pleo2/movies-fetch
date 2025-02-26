import React from "react";
import { View, Text, useWindowDimensions, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}

const Movieheader = ({ poster, originalTitle, title}: Props) => {
    const { height: ScreenHeight } = useWindowDimensions();
    return (
        <>

            <View style={{ position: "absolute", width: "100%", height: "100%" }}>
                <LinearGradient
                    start={[0, 0]}
                    colors={["rgba(0,0,0,0.8)", "transparent"]}
                    style={{ flex: 1, height: ScreenHeight * 0.4, position: "absolute", width: "100%", zIndex: 1 }}
                />
            </View>

            <View style={{ height: ScreenHeight * 0.7 }}>
                <View className="flex-1 rounded-b-lg overflow-hidden">
                    <Image style={{ flex: 1 }} source={{ uri: poster }} resizeMode='cover'/>
                </View>
            </View>

            <View className="px-5 mt-5 text-white">
                <Text className=" text-white font-Geist-regular ">{originalTitle}</Text>
                <Text className=" text-4xl text-white font-Geist-bold mt-2">{title}</Text>
            </View>
        </>
    );
};
export default Movieheader;
