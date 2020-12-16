import React from "react";
import { StyleSheet, View, Text } from "react-native";

import animalsQuestions from "../data/animals";
import capitalQuestions from "../data/capitals";
import cartoonQuestions from "../data/cartoon";
import cultureQuestions from "../data/culture";
import flagQuestions from "../data/flags";
import sportsQuestions from "../data/sports";

import { BoxItem } from "../components/BoxItem";

export default ({ navigation }) => (
  <View style={styles.container}>

    <BoxItem
      name="Animals"
      color="green"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Animals",
          questions: animalsQuestions,
          color: "green"
        })
      }
    />
    <BoxItem
      name="Capitals"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Capitals",
          questions: capitalQuestions,
          color: "#49475B"
        })
      }
    />
    <BoxItem
      name="Cartoon Characters"
      color="purple"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Cartoon",
          questions: cartoonQuestions,
          color: "purple"
        })
      }
    />
    <BoxItem
      name="General Culture"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "General Culture",
          questions: cultureQuestions,
          color: "#36b1f0"
        })
      }
    />
    <BoxItem
      name="Flags"
      color="orange"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Flag",
          questions: flagQuestions,
          color: "orange"
        })
      }
    />
    <BoxItem
      name="Sports"
      color="brown"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Sports",
          questions: sportsQuestions,
          color: "brown"
        })
      }
    />

    <Text style={styles.baseText}> Maden by Teoman Bayoğlu and Lee Sumin</Text>
    <Text style={styles.year}>2020</Text>

  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  baseText: {
    justifyContent: 'center',
    alignItems: "center",
    position: 'absolute',
    bottom: -195,
    right: 60,
    fontWeight: "bold",
    fontStyle: 'italic',
    elevation: 10,
    flex: 0.3,
    backgroundColor: "#40E0D0",
    borderWidth: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  year: {
    justifyContent: 'center',
    alignItems: "center",
    position: 'absolute',
    fontStyle: 'italic',
    bottom: -220,
    right: 190
  }

});