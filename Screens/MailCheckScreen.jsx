import React, {useRef} from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import Navbar from "./Components/authenticationNavbar";
import Verifybtn from './Components/Button'
import { useNavigation } from "@react-navigation/native";
import OTPvector from '../assets/EnterOPT.jpg'

export default function MailCheckScreen() {

    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const navigation = useNavigation();

    const handleTextChange = (text, index) => {
        if (text.length === 1) {
          if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
          }
        }
      };
    
   const handleVerifyCode = ()=>{
    navigation.navigate('SetNewPassword')
   }   

  return (
    <>
    <View style={{backgroundColor:'white', flex:1}}>      
      <Navbar backArrowBtn={true} contentStyle="space-around" />
      <View style={{alignItems:'center', marginTop:20}}>
      <Image source={OTPvector} style={{width:200, height:200, borderRadius:20}}/>
      </View>
      <View style={{ marginHorizontal: 25, marginTop: 10, marginBottom:30 }}>
        <Text style={{ fontSize: 24, color: "#51ACFF", fontWeight: 500, textAlign:'center' }}>
          Check Your Mail
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "gray",
            paddingVertical: 10,
            fontWeight: 500,
            lineHeight: 20,
          }}
        >
          We sent a reset link to contact@urovision.com enter 5 digit code
          mentioned in the email
        </Text>
     
      <View style={style.container}>
        <TextInput onChangeText={(text)=> handleTextChange(text, 0)} style={style.codeInputStyle} ref={inputRefs[0]} maxLength={1}/>

        <TextInput onChangeText={(text)=> handleTextChange(text, 1)} style={style.codeInputStyle} ref={inputRefs[1]} maxLength={1}/>

        <TextInput onChangeText={(text)=> handleTextChange(text, 2)} style={style.codeInputStyle} ref={inputRefs[2]} maxLength={1}/>

        <TextInput onChangeText={(text)=> handleTextChange(text, 3)} style={style.codeInputStyle} ref={inputRefs[3]} maxLength={1}/>

        <TextInput onChangeText={(text)=> handleTextChange(text, 4)} style={style.codeInputStyle} ref={inputRefs[4]} maxLength={1}/>
      </View>

     <Verifybtn name="Verify Code" onPress={handleVerifyCode} marginVertical={10}/> 

     <Text style={{fontSize:12, color:'gray', textAlign:'center'}}>Haven't Received Mail Yet <Text style={{textDecorationLine:'underline', color:'deepskyblue'}}>Resend Code</Text></Text>
     </View>
     </View>

    </>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:10,
    marginBottom:20

  },

  codeInputStyle: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    marginHorizontal:5,
    textAlign:'center'
  },
});
