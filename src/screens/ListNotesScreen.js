import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ListNotesScreen = ({ navigation, route }) => {
  React.useEffect(() => {
    if (route.params?.post) {
      // get notes
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <View style={styles.btnView}>
        <Button
          title="Add note"
          onPress={() => navigation.navigate("EditNote")}
        />
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
  btnView: {
    position: "absolute",
    bottom: 10,
    right: 10,
    alignSelf: "flex-end"
  }
});

export default ListNotesScreen;
