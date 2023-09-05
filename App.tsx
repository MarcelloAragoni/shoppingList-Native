import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
import TodoList from "./src/todoList/todoList";

export default function App() {
  return (
    <View style={styles.container}>
      <TodoList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 75,
    paddingLeft: 25,
  },
});
