import { View, Text, SafeAreaView, StatusBar, Platform } from "react-native";
import React from "react";

const PageLayout = ({ children }) => {
    return (
        <SafeAreaView
            style={{
                marginTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
        >
            {children}
        </SafeAreaView>
    );
};

export default PageLayout;
