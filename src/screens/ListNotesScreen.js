import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ListNotesScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnPos}>
        <TouchableOpacity onPress={() => navigation.navigate("EditNote")}>
          <View style={styles.btnBg}>
            <Text style={styles.btnText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{ margin: 10 }}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  btnPos: {
    position: "absolute",
    bottom: 20,
    right: 20,
    alignSelf: "flex-end"
  },
  btnBg: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#7e2",
    borderRadius: 100
  },
  btnText: {
    fontFamily: "dekko",
    fontSize: 48,
    color: "white"
  }
});

export default ListNotesScreen;
