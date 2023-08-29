import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ListInput } from "./src/input";
import React from "react";

export default function App() {
  const [text, onChangeText] = React.useState("Text");

  return (
    <View style={styles.container}>
      <ListInput onChangeText={onChangeText} value={text}></ListInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
