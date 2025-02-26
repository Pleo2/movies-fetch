import "@/global.css";
import "react-native-reanimated";

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
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
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
            <QueryClientProvider client={queryClient}>
                    {/* <ScrollView> */}
                        <Stack screenOptions={{
                            headerShown: false
                        }}/>
                    {/* </ScrollView> */}
                <StatusBar style="light" backgroundColor="rgba(0,0,0,0.3)" />
            </QueryClientProvider>
    );
}
