import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Modal, TouchableOpacity } from "react-native";
import Navbar from "./Components/authenticationNavbar";
import CheckBox from "react-native-check-box";
import RegisterBtn from "./Components/Button";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSelected, setSelected] = useState(false);
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false)
   

  const navigator = useNavigation()

  const HandleRegisterPress = ()=>{
     
    setTimeout(()=>{

      setShowModal(true)

    }, 1000)
  }

  const handleOkayPress = ()=>{
    
    setShowModal(false)
    navigator.navigate('Login')

  }

  return (
    <>
      <View style={{backgroundColor:"white", flex:1}}>
        <Navbar backArrowBtn={true} contentStyle="space-around" />
        
        <Modal
        
        visible = {showModal}
        transparent
        onRequestClose={()=> setShowModal(false)}
        
        >
           
           <View style={styles.centeredView}>
           <View style={styles.ModelStyle}>
           <AntDesign name='checkcircle' style={{fontSize:80, color:'#51ACFF', paddingVertical:15}}/>
            <Text style={{fontSize:24, color:'#51ACFF', fontWeight:'600'}}>Success</Text>
            <Text style={{textAlign:'center', fontSize:13, paddingVertical:10, paddingHorizontal:20}}>Your Account has been created Successfully !</Text>
            <TouchableOpacity
               onPress={handleOkayPress}
               style={styles.ButtonStyle}
            >
              <Text style={styles.ButtonText}>Start</Text>
            </TouchableOpacity>
           </View>
           </View>

        </Modal>

        <View style={{ alignItems: "center", marginVertical: 40 }}>
          <Text style={{ fontSize: 27, color: "#51ACFF" }}>
            Create an Account
          </Text>
          <Text style={{ fontSize: 12, paddingTop: 10 , color: "#B0B0B0" }}>
            Sign Up and start your healthy journey !
          </Text>
        </View>

        <View style={styles.FormContainer}>
          <View >
            <View>
              <Text style={styles.label}>First Name:</Text>
              <TextInput
                value={firstName}
                onChangeText={setFirstName}
                placeholder="John"
                style={styles.Input}
              />
            </View>
            <View>
              <Text style={styles.label}>Last Name:</Text>
              <TextInput
                value={lastName}
                onChangeText={setLastName}
                placeholder="Doe"
                style={styles.Input}
              />
            </View>

            <View>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                value={Email}
                onChangeText={setEmail}
                placeholder="john_doe77@gmail.com"
                style={styles.Input}
              />
            </View>

            <View>
              <Text style={styles.label}>Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter at least 8 characters"
                style={styles.Input}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 7,
              }}
            >
              <View style={{flex:1, flexDirection:'row'}}>
              <CheckBox
                onClick={() => setSelected(!isSelected)}
                isChecked={isSelected}
                style={{ paddingRight: 5 }}
              />
              <Text style={styles.checkBoxText}>
                By Signing Up you are agreeing with Our <Text style={{textDecorationLine:'underline'}}>Privacy Policy Terms &
                Conditions</Text>
              </Text>
              </View>
            </View>
            <RegisterBtn name="Register" marginVertical={20} onPress={HandleRegisterPress} />
          </View>
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
  },

  FormContainer: {
    marginHorizontal: 35,
  },

  label: {
    paddingBottom: 8,
    fontSize: 13,
    fontWeight:'500'
  },

  checkBoxText: {
    flex:1,
    fontSize: 10,
    flexWrap:'wrap',
    lineHeight: 15,
    color:'gray'
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  ModelStyle: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  ButtonStyle: {
    backgroundColor: "#51ACFF",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius:5,
    marginVertical: 10, // Default value, can be overridden
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },


});
