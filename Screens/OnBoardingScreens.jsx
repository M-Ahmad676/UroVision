import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import SlidesData from "./Components/OnBoardingScreenData";
import { useNavigation } from '@react-navigation/native';


const OnBoardingScreen = () => {

  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const onNextButtonPress = () => {
    if (currentIndex < SlidesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onStartButtonPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, backgroundColor:'white' }}>
      <Swiper
        loop={false}
        showsPagination={true}
        dotStyle={{ backgroundColor: "rgba(0,0,0,.2)", width: 10, height: 10 }}
        activeDotStyle={{
          backgroundColor: "skyblue",
          width: 10,
          height: 10,
        }}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {SlidesData.map((slide, index) => (
          <View
            key={index}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image source={slide.image} style={{ marginBottom: 20, width:300,height:300 }} />
            <Text style={{ fontSize: 20, fontWeight: 600 }}>{slide.Heading}</Text>
            <View style={{ width: 300 }}>
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 10,
                  textAlign: "center",
                  lineHeight: 22,
                }}
              >
                {slide.Headline}
              </Text>
              
            </View>
            {index === SlidesData.length - 1 && (
              <TouchableOpacity
                onPress={onStartButtonPress}
                style={{
                  position: "absolute",
                  bottom: 80, // Adjust as needed
                  backgroundColor: "#51ACFF",
                  width: 270,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                  borderRadius: 20,
                }}
                accessibilityLabel="Moves to Login screen"
              >
                <Text style={{ color: "white", fontSize: 15, fontWeight: 500 }}>Start</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default OnBoardingScreen;
