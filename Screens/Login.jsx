import React, { useState } from "react";
import { StyleSheet, View, Image, Text,  TextInput, TouchableOpacity, Linking } from "react-native";
import Navbar from './Components/authenticationNavbar'
import CheckBox from "react-native-check-box";
import CustomButton from "./Components/Button";
import { useNavigation } from "@react-navigation/native";


export default function Login() {

  const Navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelected] = useState(false);


  const RegisterLinkPress = ()=>{
    Navigation.navigate('SignUp')
  }

  const ForgotPasswordLinkPress = ()=>{
    Navigation.navigate('ForgotPassword')

  }

  const SignInPress =()=>{
      
    Navigation.navigate('drawer');

  }
  
  return (
    <>
    <Navbar contentStyle={"center"}/>
      <View style={{ marginTop: 45 }}>
        <Text style={styles.welcomeHeading}>
          Welcome to
          <Text style={{ color: "red", fontWeight:500 }}> Uro</Text>Vision !
        </Text>
        <Text
          style={{
            color: "#B0B0B0",
            fontSize: 12,
            textAlign: "center",
            paddingTop: 15,
          }}
        >
          Login and Continue on your Healthy Journey !
        </Text>
      </View>

      {/* Sign In Form */}
      <View style={styles.FormContainer}>
        <View>
          <View>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="user@gmail.com"
              style={styles.Input}
            />
          </View>
          <View>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="* * * * * * * * * *"
              style={styles.Input}
            />
          </View>
          <View style={{flexDirection:'row', alignItems:"center", marginVertical:7}}>
          <CheckBox
            onClick={() => setSelected(!isSelected)}
            isChecked={isSelected}
            style={{paddingRight:5}}
          />
          <Text style={styles.checkBoxText}>Remember me</Text>
          </View>

        {/* Login In button */}

         <CustomButton name="Sign In" onPress={SignInPress} marginVertical={15}/>

         {/* forgot password and Sign Up Links */}
        </View>
        <Text style={styles.linkStyle} onPress={ForgotPasswordLinkPress}>
          Forgot Password
        </Text>
        <Text style={{fontSize:12, marginVertical: 10}}>
          Don't have an Account ?{" "}
          <Text style={styles.linkStyle} onPress={RegisterLinkPress}>
            Register Here
          </Text>
        </Text>
      </View>
  
  {/* Sign In using social Media Account */}
      <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 20}}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#51ACFF" }} />
        <View>
          <Text style={{ width: 100, textAlign: "center", color:'#51ACFF' }}>Sign In with</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#51ACFF" }} />
      </View>

      <View style={styles.SocialMediaContainer}>
        <TouchableOpacity onPress={""} style={styles.VectorContainer}>
          <Image
            source={require("../assets/Google vector.png")}
            style={styles.SocialMediaVectors}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={""} style={styles.VectorContainer}>
          <Image
            source={require("../assets/Facebook vector.png")}
            style={styles.SocialMediaVectors}
          />
        </TouchableOpacity>
      </View>
      <View style={{margin:20}}>
        <Text style={{textAlign:'center', fontSize:11, lineHeight:16, color:'#858585'}}>{'By logging into UroVision you are agreeing to Our \n'} 
       <Text 
       onPress={()=> Linking.openURL('')} style={{textDecorationLine:"underline", color:"deepskyblue"}}>Terms & Conditions</Text> </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  welcomeHeading: {
    color: "deepskyblue",
    fontSize: 25,
    textAlign: "center",
  },

  VectorContainer: {
    width: 45,
    height: 45,
    padding: 10,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  SocialMediaVectors: {
    height: 30,
    width: 30,
  },

  SocialMediaContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginVertical: 30,
  },

  Input: {
    borderWidth: 1,
    borderColor: "#BCBCBC",
    borderRadius: 5,
    width: "100%",
    paddingVertical: 6,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  FormContainer: {
    paddingHorizontal: 35,
    paddingVertical: 20,
  },

  label: {
    paddingBottom: 8,
    fontSize: 13,
    fontWeight:'500'
  },

  checkBoxText: {
    fontSize: 12,
    fontWeight: "600"
  },

  linkStyle: {
    color: "#4194F5",
    textDecorationLine: "underline",
    fontSize: 12,
  },
});
