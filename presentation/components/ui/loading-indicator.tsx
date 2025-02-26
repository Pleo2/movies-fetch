import { View, ActivityIndicator } from "react-native";

const LoadingIndicator = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator size={30} />
        </View>
    );
};

export default LoadingIndicator
