import React, { useState } from "react";
import Navbar from "./Components/authenticationNavbar";
import Updatebtn from "./Components/Button";
import { StyleSheet, Modal, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function SetNewPassword() {
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const Navigator = useNavigation();

  const handleUpdatePress = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false)     
      Navigator.navigate("Login");
    }, 2000);
  };

  return (
    <>
     <View style={{backgroundColor:'white', flex:1}}>  
      <Navbar backArrowBtn={true} contentStyle="space-around" />
      <Modal
        visible={showMessage}
        transparent
        onRequestClose={() => setShowMessage(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.ModelStyle}>
            <View style={styles.verifiedLogo}>
              <MaterialIcons
                name="verified-user"
                style={{ color: "white", fontSize: 50, textAlign: "center" }}
              />
            </View>
            <Text
              style={{
                fontSize: 23,
                fontWeight: "600",
                paddingBottom: 20,
                paddingTop: 30,
              }}
            >
              Congratulations !
            </Text>
            <Text style={{ textAlign: "center", lineHeight: 20 }}>
              Password Reset successful You’ll be redirected to the login screen
              now
            </Text>
          </View>
        </View>
      </Modal>
      <View style={{ marginHorizontal: 25, marginTop: 50, marginBottom: 30 }}>
        <Text style={{ fontSize: 24, color: "#51ACFF", fontWeight: 500 }}>
          Set New Password
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "gray",
            paddingVertical: 7,
            fontWeight: 500,
            lineHeight: 20,
          }}
        >
          Create a new password. Ensure it differs from the previous one.
        </Text>

        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your new Password"
              style={styles.Input}
            />
          </View>

          <View>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              value={Confirmpassword}
              onChangeText={setConfirmPassword}
              placeholder="Re-Enter Password"
              style={styles.Input}
            />
          </View>
        </View>
        <Updatebtn name="Update Password" onPress={handleUpdatePress} />
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
    paddingVertical: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 13,
  },

  label: {
    paddingBottom: 8,
    fontSize: 13,
    fontWeight: "500",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },

  ModelStyle: {
    width: 300,
    height: 370,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  verifiedLogo: {
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: "#51ACFF",
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
