import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/kidney.png";
import Entypo from "react-native-vector-icons/Entypo";

export default function TopNavigationBar() {
  return (
    <>
      <View style={styles.topNavBar}>
        <Entypo
          name="menu"
          style={{
            fontSize: 29,
            color: "white",
            paddingTop: 12,
            paddingLeft: 20,
          }}
        />

        <View style={{ paddingRight: 35 }}>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
            <Text style={{ color: "red" }}>Uro</Text>Vision
            <Image source={logo} style={{ height: 30, width: 30 }} />
          </Text>
        </View>

        <View>{/* Empty space */}</View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topNavBar: {
    height: 80,
    backgroundColor: "skyblue",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
