import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";

const BlogDetail = () => {
  const router = useRouter();
  const { id, author } = useLocalSearchParams();
  const params = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ headerTitle: `Blog ${id}` }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Blog Detail {id}</Text>
        {author && <Text>Written by {author}</Text>}
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    </>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({});
