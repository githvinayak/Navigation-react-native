import React from "react";
import { Button, Text, View, SafeAreaView } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is Home Screen </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Drawer"
        onPress={() => navigation.navigate("Drawer")}
      />
    </View>
  );
};

export default HomeScreen;
