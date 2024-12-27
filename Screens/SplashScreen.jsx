import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text, BackHandler } from "react-native";
import icon from "../assets/kidney.png";
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function SplashScreen() {

  const navigation = useNavigation();

  const handleBackButton = () => {
    return true; // Prevent default back button behavior
  };

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
      };
    }, [])
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnBoardingScreen'); // Navigate to the main app screen
    }, 2000); // Splash screen duration

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <View>
        <Image source={icon} />
      </View>
      <Text style={Styles.textStyle}><Text style={Styles.Uro}>Uro</Text>Vision</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#51ACFF",
  },

  textStyle: {
    fontSize: 30,
    color: 'floralwhite',
    padding: 15,
    fontWeight:'600'
  },

  Uro:{
    color:'red'
  }

});
