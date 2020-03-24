import React from "react";
import { TextInput, Button } from "react-native";

function EditNoteScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Done"
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('ListNotes', { post: postText });
          }}
        />
      </>
    );
  }

  export default EditNoteScreen;