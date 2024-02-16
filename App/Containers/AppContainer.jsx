import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../Screens/Onboarding";
import Onboarding_two from "../Screens/Onboarding/onboarding-two";
import Login from "../Screens/Auth/Login";

const Stack = createNativeStackNavigator();

const AppContainer = ({ onboarded }) => {
    return (
        <>
            <Stack.Navigator
                initialRouteName={onboarded ? "login" : "onboarding"}
            >
                <Stack.Screen
                    name='onboarding'
                    component={Onboarding}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='onboarding-2'
                    component={Onboarding_two}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='login'
                    component={Login}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </>
    );
};

export default AppContainer;
