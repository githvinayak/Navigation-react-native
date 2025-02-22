import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Button, Platform } from "react-native";
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
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Drawer" component={DrawerScreen} />
        <Stack.Screen name="Dash" component={DashboardScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </>
  );
}

// import React, { useEffect } from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { Text, View, Button, StyleSheet } from "react-native";
// import HomeScreen from "@/components/HomeScreen";
// import DetailsScreen from "@/components/DetailsScreen";
// import DrawerScreen from "@/components/DrawerScreen";
// import { ProfileScreen, DashboardScreen } from "@/components/TabNavigator";
// import { SafeAreaView, Platform } from "react-native";
// import { StatusBar } from "expo-status-bar";

// // Create a Stack Navigator

// const Stack = createStackNavigator();
// const THEME_COLOR = "#08042e";
// const MyStatusBar = ({ backgroundColor, ...props }) => (
//   <View style={[styles.statusBar, { backgroundColor }]}>
//     <SafeAreaView>
//       <StatusBar translucent backgroundColor={backgroundColor} {...props} />
//     </SafeAreaView>
//   </View>
// );
// export default function App() {
//   return (
//     <>
//       {Platform.OS === "android" && (
//         <StatusBar
//           animated={true}
//           backgroundColor={THEME_COLOR}
//           barStyle="light-content"
//           hidden={false}
//           translucent={true}
//         />
//       )}
//       <SafeAreaView
//         className={`flex-1 bg-[#08042e] ${
//           Platform.OS === "android" ? `pt-[${StatusBar.currentHeight}]` : "pt-0"
//         }`}
//       >
//         <View className="flex-1">
//           <Stack.Navigator
//             screenOptions={{
//               headerStyle: {
//                 backgroundColor: "#08042e",
//                 elevation: 0, // Remove shadow on Android
//                 shadowOpacity: 0, // Remove shadow on iOS
//                 borderBottomWidth: 0,
//                 height: 60,
//               },
//               headerTitleStyle: {
//                 color: "#ffffff",
//                 fontSize: 20,
//                 fontWeight: "600",
//                 fontFamily: "System",
//               },
//               headerTitleAlign: "center",
//               headerBackTitleVisible: false,
//               headerTintColor: "#ffffff",
//               cardStyle: { backgroundColor: "#08042e" },
//               headerLeftContainerStyle: {
//                 paddingLeft: 16,
//               },
//               headerRightContainerStyle: {
//                 paddingRight: 16,
//               },
//             }}
//             initialRouteName="Home"
//           >
//             <Stack.Screen
//               name="Home"
//               component={HomeScreen}
//               options={{
//                 title: "Home",
//               }}
//             />
//             <Stack.Screen
//               name="Details"
//               component={DetailsScreen}
//               options={{
//                 title: "Details",
//               }}
//             />
//             <Stack.Screen
//               name="Drawer"
//               component={DrawerScreen}
//               options={{
//                 title: "Menu",
//               }}
//             />
//             <Stack.Screen
//               name="Dash"
//               component={DashboardScreen}
//               options={{
//                 title: "Dashboard",
//               }}
//             />
//             <Stack.Screen
//               name="Profile"
//               component={ProfileScreen}
//               options={{
//                 title: "Profile",
//               }}
//             />
//           </Stack.Navigator>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// }
