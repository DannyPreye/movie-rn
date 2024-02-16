import { View, Text, Image } from "react-native";
import React from "react";
import OnboardingLayout from "../../Layouts/OnboardingLayout";
import { useNavigation } from "@react-navigation/native";

const Onboarding_two = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.navigate("onboarding");
    };
    const handleNext = () => {
        navigation.navigate("login");
    };
    return (
        <OnboardingLayout
            handleOnPress={handleNext}
            handleBack={handleBack}
            hasBack={true}
        >
            <View className='relative h-60 '>
                <Image
                    className=' mx-auto left-0 w-[90%]  h-full object-cover'
                    source={require("../../../assets/movie-world-no-bg.png")}
                />
                <View className='px-3'>
                    <Text className='text-center font-bold my-4 text-gray-200 '>
                        Get the latest and trending movies around the world
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

export default Onboarding_two;
