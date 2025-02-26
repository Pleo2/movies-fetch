import { Href, router } from "expo-router";
import { Pressable, Image } from "react-native";

interface Props {
    poster: string;
    id: number;
    smallPoster?: boolean;
    width: number;
    height: number;
}

const MoviePoster = ({
    poster,
    id,
    smallPoster = false,
    width,
    height
}: Props) => {

    return (
        <Pressable
            className=""
            onPress={() => {
                router.push(`/movies/${id}` as Href);
            }}
        >
            <Image
                source={{ uri: poster }}
                style={{
                    width: smallPoster ? 100 : width,
                    height: smallPoster ? 130 : height,
                    resizeMode: "cover",
                    borderRadius: 4
                }}
            />
        </Pressable>
    );
};
export default MoviePoster;
