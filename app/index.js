import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Main Page</Text>
      <Link href={"/about"}>Go to about page</Link>
      <Link href={"/blog"} asChild>
        <Button title="Go to Blog Page" />
      </Link>
      <Link href={"/contact"} asChild>
        <Button title="Go to Contact Page" />
      </Link>
      <Link href={"/(tabs)/feed"} asChild>
        <Button title="Go to tabs Page" />
      </Link>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
