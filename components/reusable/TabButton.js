/** @format */

import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

function TabButton({ title, onPress, selected }) {
  const TabIndicator = () => {
    return <View style={styles.selectedTab}></View>;
  };

  const PromoTabs = ["Near-by", "Previous", "Fa vourites"];

  const Tabs = () => {
    return (
      <View style={styles.tabcontainer}>
        <TabIndicator />
        {PromoTabs.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => console.log(item, index)}
            >
              <View style={styles.tabs}>
                <Text style={styles.rewardcuptxt}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return <Tabs />;
}

const styles = StyleSheet.create({
  container: {},
  texts: {},
  line: {},
  selectedTab: {
    position: "absolute",
    height: "100%",
    width: 100,
    left: 0,
    borderRadius: 15,
    backgroundColor: "green",
  },
  rewardcuptxt: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  tabs: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  tabcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    width: "90%",
    backgroundColor: "black",
    borderRadius: 12,
    marginHorizontal: 15,
  },
});

export default TabButton;
