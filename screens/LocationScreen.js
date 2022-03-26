/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Text,
} from "react-native";
import HeaderBarLocation from "../components/reusable/HeaderBarLocation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TabButton from "../components/reusable/TabButton";
import dummyData from "../data/dummy";

const { width } = Dimensions.get("window");

function LocationScreen(props) {
  const AddressBoxes = () => {
    return (
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        data={dummyData.locations}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                marginBottom: 12,
                borderRadius: 12,
                backgroundColor: "grey",
                width: width / 1.2,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 10,
                  marginTop: 5,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {item.title}
                </Text>
                <MaterialCommunityIcons
                  name="bookmark"
                  size={24}
                  color={item.bookmarked ? "red" : "green"}
                />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {item.address}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {item.operation_hours}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                <TouchableOpacity>
                  <View
                    style={{
                      height: 40,
                      width: width / 3,
                      borderRadius: 24,
                      justifyContent: "center",
                      marginTop: 10,
                      marginBottom: 10,
                      marginHorizontal: 5,
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "white",
                    }}
                  >
                    <Text
                      style={{
                        color: "lightgrey",
                        fontWeight: "bold",
                        fontSize: 15,
                      }}
                    >
                      Pick-Up
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 40,
                      width: width / 3,
                      borderRadius: 24,
                      justifyContent: "center",
                      marginTop: 10,
                      marginBottom: 10,
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "white",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: "lightgrey",
                        fontWeight: "bold",
                      }}
                    >
                      Delivery
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HeaderBarLocation />
      <View
        style={{
          flex: 1,
          marginTop: -25,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: "#2C2C2C",
        }}
      >
        <TabButton />
        <View style={styles.searchcnt}>
          <TextInput placeholder="Enter your City, State or Zip-Code" />
          <MaterialCommunityIcons name="magnify" size={30} />
        </View>
        <AddressBoxes />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 12,
    paddingHorizontal: 20,
  },
  searchcnt: {
    flexDirection: "row",
    marginTop: 15,
    height: 50,
    width: width / 1.2,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    borderRadius: 25,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "#2C2C2C",
    alignItems: "center",
    flex: 1,
  },
});

export default LocationScreen;
