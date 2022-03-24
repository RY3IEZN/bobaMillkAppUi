/** @format */

import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
} from "react-native";

function HeaderBar(props) {
  return (
    <SafeAreaView>
      <View style={styles.headerBar}>
        <View style={styles.nameheader}>
          <View>
            <Text style={styles.nametxt}>Uneku,</Text>
            <Text style={styles.nametxt}>Welcome back</Text>
          </View>
          <TouchableOpacity style={styles.tooglebtncontainer}>
            <View style={[styles.sun, styles.selectedicon]}>
              <Image
                style={styles.sunimg}
                source={require("../../assets/sunny.png")}
              />
            </View>
            <Text> </Text>
            <Text> </Text>
            <View style={styles.sun}>
              <Image
                style={styles.sunimg}
                source={require("../../assets/night.png")}
              />
            </View>
          </TouchableOpacity>
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
    width: "100%",
    backgroundColor: "#595683",
    flexDirection: "row",
  },
});

export default HeaderBar;
