import "@/global.css";
import "react-native-reanimated";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
    const [loaded] = useFonts({
        "Geist-regular": require("../assets/fonts/Geist-Regular.ttf"),
        "Geist-bold": require("../assets/fonts/Geist-Bold.ttf"),
        "Geist-medium": require("../assets/fonts/Geist-Medium.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#000" }}>
            <QueryClientProvider client={queryClient}>
                {/* <ScrollView> */}
                    <Stack screenOptions={{
                        headerShown: false
                    }}/>
                {/* </ScrollView> */}
                <StatusBar style="light" backgroundColor="rgba(0,0,0,0.3)" />
            </QueryClientProvider>
        </GestureHandlerRootView>
    );
}
