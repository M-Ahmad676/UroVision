import React, { useState } from "react";
import Navbar from "./Components/authenticationNavbar";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import ResetPasswordBtn from "./Components/Button";
import { useNavigation } from "@react-navigation/native";
import ForgotPasswordVector from "../assets/forgotPassword.jpg";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleResetPassword = () => {
    navigation.navigate("MailCheckScreen");
  };

  return (
    <>
      <View style={styles.bodyStyle}>
        <Navbar backArrowBtn={true} contentStyle="space-around" />
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image
            source={ForgotPasswordVector}
            style={{ width: 200, height: 200, borderRadius:20 }}
          />
        </View>
        <View style={{ marginHorizontal: 30, marginVertical: 5 }}>
          <Text style={styles.headingStyle}>Forgot Password</Text>
          <Text style={styles.bodyTextStyle}>
            Lost Your Password ? Enter Your email address to reset your password
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="contact@unrovision.com"
            style={styles.Input}
          />
          <ResetPasswordBtn
            name="Reset Password"
            onPress={handleResetPassword}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderColor: "#BCBCBC",
    borderRadius: 5,
    width: "100%",
    paddingVertical: 7,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 13,
    backgroundColor:'white'
  },

  bodyStyle: {
    backgroundColor: "white",
    flex: 1,
  },

  headingStyle: {
    fontSize: 24,
    color: "#51ACFF",
    fontWeight: "500",
    textAlign: "center",
  },

  bodyTextStyle: {

    fontSize: 12,
    color: "gray",
    paddingVertical: 7,
    fontWeight: "500",
    lineHeight: 20,
    marginVertical:8,
  },
});
