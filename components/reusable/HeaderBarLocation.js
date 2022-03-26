/** @format */

import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

function HeaderBarLocation(props) {
  return (
    <SafeAreaView>
      <View style={styles.headerBar}>
        <View style={styles.nameheader}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              color={"white"}
              size={40}
              name="keyboard-backspace"
            />
            <Text style={styles.nametxt}>Locations</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectedicon: {
    borderRadius: 20,
    backgroundColor: "black",
  },
  sunimg: {
    width: 30,
    height: 30,
    tintColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  sun: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  tooglebtncontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: 24,
    height: 40,
    width: 90,
    borderRadius: 20,
    backgroundColor: "#7B789F",
    borderWidth: 0.5,
    borderColor: "grey",
  },
  nametxt: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 90,
  },
  nameheader: {
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  headerBar: {
    height: 150,
    width: width,
    backgroundColor: "green",
  },
});

export default HeaderBarLocation;
