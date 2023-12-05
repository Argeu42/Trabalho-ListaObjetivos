import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons'; 

import TelaInicial from "./components/TelaInicial";
import Explicacao from "./components/Explicacao";

const Botton = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Botton.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = 'home';
            } else if (route.name === "Settings") {
              iconName = 'infocirlce';
            }

            // Você pode retornar qualquer componente que você gosta aqui!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#1e085a",
          tabBarInactiveTintColor: "#fff",
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: "#5e0acc" },
          headerStyle: { backgroundColor: "#5e0acc" },
          headerTintColor: "#fff",
        })}
      >
        <Botton.Screen name="Home" component={TelaInicial} />
        <Botton.Screen name="Settings" component={Explicacao} />
      </Botton.Navigator>
    </NavigationContainer>
  );
}
