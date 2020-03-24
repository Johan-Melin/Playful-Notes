import React from "react";
import { View, Text, Button } from "react-native";

function ListNotesScreen({ navigation, route }) {
    React.useEffect(() => {
      if (route.params?.post) {
        // Post updated, do something with `route.params.post`
        // For example, send the post to the server
      }
    }, [route.params?.post]);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Edit note"
          onPress={() => navigation.navigate('EditNote')}
        />
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      </View>
    );
  }

  export default ListNotesScreen;
