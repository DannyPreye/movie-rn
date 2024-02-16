import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ScaleProvider } from "react-native-design-to-component";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContainer from "./App/Containers/AppContainer";

export default function App() {
    const [onboarded, setOnboarded] = useState();

    useEffect(() => {
        getStorage();
    }, []);

    const getStorage = async () => {
        const boarded = await AsyncStorage.getItem("ONBOARDED");
        setOnboarded(JSON.parse(boarded));
    };

    return (
        <SafeAreaProvider>
            <ScaleProvider config={{ height: 844, width: 390 }}>
                <NavigationContainer>
                    <AppContainer onboarded={onboarded} />
                </NavigationContainer>
            </ScaleProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
