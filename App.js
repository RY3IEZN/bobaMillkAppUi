/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigators from "./components/navigations/Navigators";
import HeaderBar from "./components/reusable/HeaderBar";
import HomeScreen from "./screens/HomeScreen";
import LocationScreen from "./screens/LocationScreen";

export default function App() {
  return <LocationScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
