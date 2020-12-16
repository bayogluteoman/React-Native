import React from "react";
import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    margin: 15,
    paddingTop: 45
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: "#fff",
    fontWeight: "600",
  }
});

export const BoxItem = ({ onPress = () => { }, name, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <SafeAreaView style={[styles.box, { backgroundColor: color }]}>
      <Text style={styles.text}>{name}</Text>
    </SafeAreaView>
  </TouchableOpacity>
);
