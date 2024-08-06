import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Entypo, AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";

function CustomDrawerComponent(props) {
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          width={80}
          height={80}
          style={styles.userImg}
        />
        <View style={styles.userDetailWrapper}>
          <Text style={styles.userName}>Dilnawaz Khan</Text>
          <Text style={styles.userEmail}>dilkhan0706@gmail.com</Text>
        </View>
      </View>
      <DrawerItem
        label={"Feed"}
        icon={({ color, size }) => (
          <Entypo
            name="list"
            size={size}
            color={pathName === "/feed" ? "#fff" : "#000"}
          />
        )}
        labelStyle={{
          marginLeft: -20,
          fontSize: 18,
          color: pathName === "/feed" ? "#fff" : "#000",
        }}
        onPress={() => router.push("(drawer)/(tabs)/feed")}
        style={{ backgroundColor: pathName === "/feed" ? "#333" : "#fff" }}
      />
      <DrawerItem
        label={"Profile"}
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathName === "/profile" ? "#fff" : "#000"}
          />
        )}
        labelStyle={{
          marginLeft: -20,
          fontSize: 18,
          color: pathName === "/profile" ? "#fff" : "#000",
        }}
        onPress={() => router.push("(drawer)/(tabs)/profile")}
        style={{ backgroundColor: pathName === "/profile" ? "#333" : "#fff" }}
      />
      <DrawerItem
        label={"Favourites"}
        icon={({ color, size }) => (
          <MaterialIcons
            name="favorite"
            size={size}
            color={pathName === "/favourites" ? "#fff" : "#000"}
          />
        )}
        labelStyle={{
          marginLeft: -20,
          fontSize: 18,
          color: pathName === "/favourites" ? "#fff" : "#000",
        }}
        onPress={() => router.push("/favourites")}
        style={{
          backgroundColor: pathName === "/favourites" ? "#333" : "#fff",
        }}
      />
      <DrawerItem
        label={"Settings"}
        icon={({ color, size }) => (
          <Feather
            name="settings"
            size={size}
            color={pathName === "/settings" ? "#fff" : "#000"}
          />
        )}
        labelStyle={{
          marginLeft: -20,
          fontSize: 18,
          color: pathName === "/settings" ? "#fff" : "#000",
        }}
        onPress={() => router.push("/settings")}
        style={{ backgroundColor: pathName === "/settings" ? "#333" : "#fff" }}
      />
    </DrawerContentScrollView>
  );
}

const _layout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="favourites" options={{ headerShown: true }} />
      <Drawer.Screen name="settings" options={{ headerShown: true }} />
    </Drawer>
  );
};

export default _layout;

const styles = StyleSheet.create({
  userInfoWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    gap: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailWrapper: {
    marginTop: 25,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
