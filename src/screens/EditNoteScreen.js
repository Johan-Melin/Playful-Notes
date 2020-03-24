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
        autoFocus={true}
        value={postText}
        onChangeText={setPostText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontFamily: "dekko",
    fontSize: 20,
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    textAlignVertical: "top"
  }
});

export default EditNoteScreen;
