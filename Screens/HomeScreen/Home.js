import React from "react";
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/kidney.png";
import { QuickStatusData } from "./QuickStatusData";
import Clipboard from "../../assets/clipboard.png";
import DoctorImage from "../../assets/doctor.png";
import { useNavigation } from "@react-navigation/native";

export default function Home() {


  const Navigation = useNavigation()

   const  handleTrackSymptoms =()=>{

    Navigation.navigate('SymptomTracker')
       
   }

  return (
    <>
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.WelcomeContainer}>
          <View style={{ width: 220 }}>
            <Text style={{ fontSize: 24, fontWeight: "500", color: "white" }}>
              Welcome User !
            </Text>
            <Text style={{ fontSize: 11, color: "white", paddingVertical: 8 }}>
              We’re here to help you learn about kidney stones and how to manage
              them.
            </Text>
          </View>
          <Image source={logo} style={{ width: 80, height: 80 }} />
        </View>

        <View style={styles.QuickStatusContainer}>
          <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 20 }}>
            Your Quick Status
          </Text>
          {QuickStatusData.map((StatusData, index) => (
            <View key={index} style={styles.StatusBars}>
              <Image
                source={StatusData.Icon}
                style={{ width: 30, height: 30 }}
              />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 13, fontWeight: "600" }}>
                  {StatusData.Status}
                </Text>
                <Text style={{ fontSize: 11, color: "gray", paddingTop: 3 }}>
                  {StatusData.Result}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            What would you like to do ?
          </Text>
           
           
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={handleTrackSymptoms}>
            <View style={styles.FeatureBox}>
              <Text style={styles.FeatureHeading}>Track Symptoms</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 120,
                }}
              >
                <Text style={styles.FeatureText}>
                  Log and {"\n"}Track your {"\n"}symptoms {"\n"}over time.
                </Text>

                <Image source={Clipboard} />
              </View>
            </View>
            </TouchableOpacity>

            <View style={styles.FeatureBox}>
              <Text style={styles.FeatureHeading}>Find A Doctor</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 120,
                }}
              >
                <Text style={styles.FeatureText}>
                  Connect with {"\n"} kidney stone {"\n"} experts
                </Text>
                <Image source={DoctorImage} />
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  WelcomeContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "skyblue",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  QuickStatusContainer: {
    marginVertical: 5,
    marginHorizontal: 20,
  },

  StatusBars: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "deepskyblue",
  },

  FeatureBox: {
    height: 160,
    borderWidth: 1,
    borderColor: "deepskyblue",
    flex: 1,
    marginVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginRight: 8,
  },

  FeatureHeading: {
    fontSize: 15,
    fontWeight: "500",
    paddingTop: 10,
    paddingLeft: 5,
    textAlign: "left",
  },

  FeatureText: {
    fontSize: 12,
    lineHeight: 17,
    color: "gray",
  },
});
