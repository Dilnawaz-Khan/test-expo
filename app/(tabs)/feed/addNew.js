import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const addNew = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add New Feed</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

export default addNew;

const styles = StyleSheet.create({});
