import React, { Component, useState } from "react";
import { View, Button, TextInput } from "react-native";

export default function Create({ navigation }) {
  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        keyboardType={"numeric"}
        placeholder="Enter Your Mobile Number"
        underlineColorAndroid="transparent"
      />
      <Button title="Create" />
      <Button title="Back" onPress={backHandler} />
    </View>
  );
}
