import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./theme"; // Importe o tema
import ExplorarScreen from "./screens/ExplorarScreen";
import LoginScreen from "./screens/LoginScreen";
import EventForm from "./components/EventForm";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritosScreen from "./screens/FavoritosScreen";
import AtualizacoesScreen from "./screens/AtualizacoesScreen";

// Criação dos navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator para a tela Explorar e suas telas relacionadas
const ExplorarStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explorar"
        component={ExplorarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EventForm" component={EventForm} />
    </Stack.Navigator>
  );
};

// Stack Navigator para a tela de Login
const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// Bottom Tab Navigator principal
const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explorar" component={ExplorarStack} />
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
      <Tab.Screen name="Atualizações" component={AtualizacoesScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTabs">
          {/* Tela de Login */}
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{ headerShown: false }}
          />
          {/* Abas principais */}
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;