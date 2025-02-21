import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NewFile = () => {
  return (
    <View>
      <Ionicons name="home" size={50} color="yellow" />
      <Text>Hello</Text>
    </View>
  );
};

export default NewFile;
