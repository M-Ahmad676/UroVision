import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

export default function Button({ name, onPress, marginVertical }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.ButtonStyle, marginVertical && { marginVertical }]}
      accessibilityLabel="logs into account"
    >
      <Text style={styles.ButtonText}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: "#51ACFF",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5, // Default value, can be overridden
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
