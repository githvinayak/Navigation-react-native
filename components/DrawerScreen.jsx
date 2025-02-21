import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      {/* <DrawerScreen /> */}
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
