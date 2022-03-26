/** @format */

import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import HeaderBar from "../components/reusable/HeaderBar";
import dummyData from "../data/dummy";
const { width, height } = Dimensions.get("window");

function RewardsScreen(props) {
  const RenderReward = () => {
    return (
      <>
        <View
          style={{
            alignItems: "center",
            marginVertical: 12,
          }}
        >
          <Text style={{ color: "green", fontSize: 35, fontWeight: "bold" }}>
            Rewards
          </Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            You are 60 points away from your next reward!
          </Text>
          <ImageBackground
            source={require("../assets/reward-cup.png")}
            resizeMode="contain"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: width,
              height: height / 2,
              marginTop: 10,
            }}
          >
            <View style={styles.rewardcuptextcontainer}>
              <Text
                style={{ color: "green", fontWeight: "bold", fontSize: 20 }}
              >
                280 Points
              </Text>
            </View>
          </ImageBackground>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: width,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "green",
                  height: 50,
                  width: width / 3,
                  borderRadius: 24,
                  justifyContent: "center",
                  marginTop: 20,
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Scan in store
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: 50,
                  width: width / 3,
                  borderRadius: 24,
                  justifyContent: "center",
                  marginTop: 20,
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: "green",
                }}
              >
                <Text style={{ color: "green", fontWeight: "bold" }}>
                  Redeem
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: 20,
            fontSize: 20,
            marginHorizontal: 20,
          }}
        >
          Available Rewards
        </Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderBar />
      <FlatList
        style={styles.flatlistheader}
        data={dummyData.availableRewards}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View>{<RenderReward />}</View>}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 20,
                marginVertical: 10,
                height: 40,
                borderRadius: 20,
                backgroundColor: item.eligible ? "yellow" : "grey",
              }}
            >
              <Text
                style={{
                  color: item.eligible ? "black" : "white",
                  fontWeight: item.eligible ? "bold" : "normal",
                }}
              >
                {item.title}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rewardcuptextcontainer: {
    width: 80,
    height: 80,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  flatlistheader: {
    flex: 1,
    marginTop: -25,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#2C2C2C",
  },
  container: {
    flex: 1,
  },
});

export default RewardsScreen;
