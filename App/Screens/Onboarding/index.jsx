import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";
import OnboardingLayout from "../../Layouts/OnboardingLayout";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const navigation = useNavigation();
    const handleOnPress = () => {
        navigation.navigate("onboarding-2");
    };
    return (
        <OnboardingLayout handleOnPress={handleOnPress}>
            <View className='relative h-60 '>
                <Image
                    className=' mx-auto left-0 w-[90%]  h-full object-cover'
                    source={require("../../../assets/movie-night-no-bg.png")}
                />
                <View className='px-3'>
                    <Text className='text-center font-bold my-4 text-gray-200 '>
                        Get Latest Movie Information
                    </Text>
                    <Text className='text-center text-gray-200'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Exercitationem, temporibus enim! Repellendus nihil
                        nisi amet perspiciatis, voluptates suscipit laboriosam
                        labore odio quasi cumque sint exercitationem quae
                        accusamus natus ea. Fugiat.
                    </Text>
                </View>
            </View>
        </OnboardingLayout>
    );
};

export default Onboarding;
