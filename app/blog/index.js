import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const Blog = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Blog Page</Text>
      <Button
        title="Go to Blog 1"
        onPress={() => router.push("blog/1?author=Dilnawaz Khan")}
      />
      <Button title="Go to Blog 2" onPress={() => router.push("blog/2")} />
      <Button title="Go to Blog 3" onPress={() => router.push("blog/3")} />
      <Button title="Go to Blog 4" onPress={() => router.push("blog/4")} />
      <Link
        href={{
          pathname: "blog/5",
          params: {
            author: "John Doe",
            age: 45,
          },
        }}
      >
        <Text>Go to Blog 5</Text>
      </Link>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({});
