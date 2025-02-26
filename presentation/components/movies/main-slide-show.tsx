import {
    View,
    Text,
    Dimensions,
    useWindowDimensions,
    Pressable
} from "react-native";
import { type Movie } from "@/core/infrastucture/interfaces/movies.interface";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { useRef } from "react";
import MoviePoster from "./movies-poster";

interface Props {
    movies: Movie[];
}

const WIDTH = 200;
const HEIGHT = 300;

const MainSlideShow = ({ movies }: Props) => {
    const width = useWindowDimensions().width;
    const ref = useRef<ICarouselInstance>(null);
    return (
        <View className="h-max w-full">
            <Carousel
                data={movies}
                renderItem={({ item }) => (
                        <MoviePoster
                            id={item.id}
                            poster={item.poster}
                            width={WIDTH}
                            height={HEIGHT}
                        />
                )}
                width={WIDTH}
                height={HEIGHT}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 10
                }}
                mode="parallax"
                defaultIndex={1}
            />
        </View>
    );
};
export default MainSlideShow;
