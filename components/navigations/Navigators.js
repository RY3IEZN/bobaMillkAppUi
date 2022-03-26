/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import RewardsScreen from "../../screens/RewardsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Navigators(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "#595683",
          tabBarActiveTintColor: "white",
          tabBarInactiveBackgroundColor: "grey",
          tabBarInactiveTintColor: "#eee",
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} />,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => <MaterialCommunityIcons name="gift" size={24} />,
          }}
          name="RewardsScreen"
          component={RewardsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Navigators;
