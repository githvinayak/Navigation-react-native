import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Button } from "react-native";
import HomeScreen from "@/components/HomeScreen";
import DetailsScreen from "@/components/DetailsScreen";
import DrawerScreen from "@/components/DrawerScreen";
import { ProfileScreen, DashboardScreen } from "@/components/TabNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
// Create a Stack Navigator

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e", // Change header background color
            height:40
          },
          headerTintColor: "#fff", // Change header text/button color
          headerTitleStyle: {
            fontWeight: "bold", // Customize title text
            fontSize: 20,
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen}  options={{title:"Vinayak"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Drawer" component={DrawerScreen} />
        <Stack.Screen name="Dash" component={DashboardScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </>
  );
}
