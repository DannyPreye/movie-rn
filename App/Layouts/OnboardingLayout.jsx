import { View, Text, TouchableOpacity, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import PageLayout from "./PageLayout";
import { useRouter } from "expo-router";

const OnboardingLayout = ({ children, handleOnPress, hasBack, handleBack }) => {
    const ref = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(ref, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [ref]);

    return (
        <PageLayout>
            <Animated.View
                style={{ opacity: ref }}
                className='flex flex-col justify-between relative bg-blue-700  h-screen'
            >
                <View className='absolute w-40 h-40 rounded-full bg-white left-[-20%]'></View>
                <View className='absolute w-40 h-40 rounded-full bg-blue-500 bottom-0 right-[-20%]'></View>
                <View className='absolute w-10 h-10 rounded-full top-[5%] bg-blue-500 bottom-0 left-3'></View>
                <View className='absolute w-10 h-10 rounded-full bg-white bottom-[14%] right-5'></View>
                <View className='absolute w-5 h-5 rounded-full bg-white top-[14%] right-5'></View>
                <View className='absolute w-5 h-5 rounded-full bg-white top-[40%] right-5'></View>
                <View className='absolute w-5 h-5 rounded-full bg-white bottom-[14%] left-5'></View>
                <View>
                    <Text className='text-2xl mt-2 text-white font-bold text-center mb-8 '>
                        Movies
                    </Text>
                    <View className='relative h-60 '>{children}</View>
                </View>

                <View
                    className={`${
                        hasBack ? "flex flex-row gap-5 items-center px-4" : ""
                    }`}
                >
                    {hasBack && (
                        <TouchableOpacity
                            onPress={handleBack}
                            className='w-[40%] mx-auto mb-6 rounded-md shadow-md drop-shadow-sm bg-blue-800 flex items-center justify-center h-[40px]'
                        >
                            <Text className='font-bold  text-white '>Back</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity
                        onPress={handleOnPress}
                        className={`${
                            hasBack ? "w-[40%]" : "w-[90%]"
                        } mx-auto mb-6 rounded-md shadow-md drop-shadow-sm bg-white flex items-center justify-center h-[40px]`}
                    >
                        <Text className='font-bold  text-blue-700 '>Next</Text>
                    </TouchableOpacity>
                </View>
                {/* <AdventureSvg width={200} height={200} /> */}
            </Animated.View>
        </PageLayout>
    );
};

export default OnboardingLayout;
