/** @format */

import React from "react";
import {
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  Animated,
  Image,
} from "react-native";
import HeaderBar from "../components/reusable/HeaderBar";
import dummyData from "../data/dummy";

function HomeScreen(props) {
  const PromoTabs = ["Scan in store", "Drink of the Day", "Deals"];

  const TabIndicator = () => {
    return <View style={styles.selectedTab}></View>;
  };

  const Tabs = () => {
    return (
      <>
        <View style={styles.tabcontainer}>
          <TabIndicator />
          {PromoTabs.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => console.log(item)}>
                <View style={styles.tabs}>
                  <Text style={styles.rewardcuptxt}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <Animated.FlatList
          data={dummyData.promos}
          contentContainerStyle={{ just: "center" }}
          horizontal
          pagingEnabled
          scrollEventThrottle={5}
          snapToAlignment="center"
          showsHorizontalScrollIndicator
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 50,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={item.image}
                  height={50}
                  width={50}
                />
                <Text style={styles.itemname}>{item.name}</Text>
                <Text style={styles.rewardcuptxt}>{item.description}</Text>
                <Text style={styles.rewardcuptxt}>
                  Calories: {item.calories}
                </Text>
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: "green",
                      height: 50,
                      width: 100,
                      borderRadius: 24,
                      justifyContent: "center",
                      marginTop: 20,
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.rewardcuptxt}>Order now</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderBar />
      <ScrollView style={styles.scrollviews}>
        <TouchableOpacity style={styles.rewardscontainer}>
          <View style={styles.rewardssectionA}>
            <ImageBackground
              style={styles.rewardcup}
              resizeMode="contain"
              source={require("../assets/reward-cup.png")}
            >
              <View style={styles.rewardcuptextcontainer}>
                <Text style={styles.rewardcuptxt}>280L</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.rewardssectionB}>
            <Text style={styles.rewarddetailstxt}>Available Rewards</Text>
            <View style={styles.rewardpointcontainer}>
              <Text style={styles.rewardcuptxt}>150 points - $2.50 off</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Tabs />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  itemname: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  selectedTab: {
    position: "absolute",
    height: "100%",
    width: 100,
    left: 0,
    borderRadius: 15,
    backgroundColor: "green",
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
    width: "95%",
    backgroundColor: "black",
    borderRadius: 12,
    marginHorizontal: 15,
  },
  rewardpointcontainer: {
    marginTop: 5,
    padding: 8,
    borderRadius: 24,
    backgroundColor: "#37A372",
  },
  rewarddetailstxt: {
    color: "#37A372",
    fontSize: 20,
  },
  rewardssectionB: {
    flex: 1,
    backgroundColor: "#F3DEE8",
    marginLeft: -18,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  rewardcuptxt: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  rewardcuptextcontainer: {
    width: 40,
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  rewardcup: {
    width: 85,
    height: 85,
    marginLeft: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  rewardssectionA: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D993B4",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  rewardscontainer: {
    flexDirection: "row",
    marginTop: 24,
    marginHorizontal: 24,
    height: 100,
  },
  scrollviews: {
    flex: 1,
    marginTop: -25,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#2C2C2C",
  },
  container: {
    flex: 1,
    backgroundColor: "#2C2C2C",
  },
});

export default HomeScreen;
