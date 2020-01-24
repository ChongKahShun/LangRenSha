import React, { Component, useState } from "react";
import { View, Button } from "react-native";

export default function Create({ navigation }) {
  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Button title="Create" />
      <Button title="Back" onPress={backHandler} />
    </View>
  );
}
