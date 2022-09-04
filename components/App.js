import React from "react";
import { View, Text } from "react-native";
import UserInfo from "./components/UserInfo/UserInfo";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 0.955,
  },
  main: {
    backgroundColor: "#333333",
    flex: 1,
    flexDirection: "column"
  },
  topNav: {
    flex: 0.045,
    backgroundColor: "#C75000"
  }
})

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.topNav}></View>
      <View style={styles.container}>
        <UserInfo/>
      </View>
    </View>
  )
}

export default App