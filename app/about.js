import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const About = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About Page</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
