import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  const pressCreate = () => {
    navigation.navigate("Create");
  };

  const pressJoin = () => {
    navigation.navigate("Join");
  };

  return (
    <View>
      <Text>Hello !</Text>
      <Button title="Create" onPress={pressCreate} />
      <Button title="Join" onPress={pressJoin} />
    </View>
  );
}
