import React, { Component, useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { style } from "../style/global";

export default function Join({ navigation }) {
  const [enteredText, setEnteredText] = useState("");

  const backHandler = () => {
    navigation.goBack();
  };

  const setCode = enteredText => {
    setEnteredText(enteredText);
  };

  return (
    <View style={style.screen}>
      <View style={style.inputContainer}>
        <View style={style.textinputstyle}>
          <TextInput placeholder="Code" />
        </View>
        <Button title="Back" onPress={backHandler} />
      </View>
    </View>
  );
}
