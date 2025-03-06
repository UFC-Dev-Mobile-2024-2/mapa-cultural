import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./theme"; // Importe o tema
import ExplorarScreen from "./screens/ExplorarScreen";
import LoginScreen from "./screens/LoginScreen";
import EventForm from "./components/EventForm";

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Explorar">
          <Stack.Screen
            name="Explorar"
            component={ExplorarScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="EventForm" component={EventForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;