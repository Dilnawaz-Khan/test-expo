import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Favourites = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Favourites Page</Text>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({});
