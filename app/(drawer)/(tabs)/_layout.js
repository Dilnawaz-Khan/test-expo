import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, router } from "expo-router";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerLeft: () => <DrawerToggleButton /> }}>
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
          tabBarLabel: "Feed",
          headerTitle: "Feed",
          headerRight: () => (
            <Button
              title="add new post"
              onPress={() => router.push("feed/addNew")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
          headerTitle: "Profile",
        }}
      />
    </Tabs>
  );
};

export default _layout;
