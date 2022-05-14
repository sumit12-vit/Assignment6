import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Form" component={ThirdScreen} />
    </Tab.Navigator>
  );
}

export default function RootStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page_1" component={FirstScreen} />
      <Stack.Screen name="Page_2" component={SecondScreen} />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}
