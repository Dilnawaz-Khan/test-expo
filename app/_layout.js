import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "indigo",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home Page",
          headerRight: () => (
            <Button
              title="Contact"
              onPress={() => router.navigate("contact")}
              //   onPress={() => router.push("contact")}
            />
          ),
        }}
      />
      <Stack.Screen name="about" options={{ headerTitle: "About Page" }} />
      <Stack.Screen
        name="blog/index"
        options={{ headerTitle: "All Blogs Page" }}
      />
      <Stack.Screen
        name="contact"
        options={{ headerTitle: "Contact Page", presentation: "modal" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
