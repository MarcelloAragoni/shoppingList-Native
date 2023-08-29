import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ListInput } from "./src/input";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <ListInput />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 25,
    paddingLeft: 25,
  },
});
