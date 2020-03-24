import React from "react";
import { TextInput, Button, StyleSheet } from "react-native";

const EditNoteScreen = ({ navigation, route }) => {
  const [postText, setPostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={styles.textInput}
        value={postText}
        onChangeText={setPostText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    padding: 10,
    backgroundColor: "white"
  }
});

export default EditNoteScreen;
