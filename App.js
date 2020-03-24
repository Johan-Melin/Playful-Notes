import * as React from "react";
import { Button, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListNotesScreen from "./src/screens/ListNotesScreen";
import EditNoteScreen from "./src/screens/EditNoteScreen";
import * as Font from "expo-font";

const Stack = createStackNavigator();

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      dekko: require("./assets/fonts/Dekko-Regular.ttf")
    });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListNotes">
          <Stack.Screen
            name="ListNotes"
            component={ListNotesScreen}
            options={{ title: "Playful Notes" }}
          />
          <Stack.Screen
            name="EditNote"
            component={EditNoteScreen}
            options={{ title: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
