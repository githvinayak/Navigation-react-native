import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, User} from 'lucide-react-native';
import { Text, View } from "react-native";


const Tab = createBottomTabNavigator();
 function ProfileScreen() {
    return (
      <View>
        <Text>This is Profile Screen</Text>
      </View>
    );
  }
  
  // Profile Stack
 function DashboardScreen() {
    return (
        <View>
        <Text>This is Dash Screen</Text>
      </View>
    );
  }
  
  // Settings Stack
  

 function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Profile: <User color={color} size={size} />,
            Dash: <Home color={color} size={size} />,
            
          };
          return icons[route.name];
        },
      })}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Dash"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export { ProfileScreen, DashboardScreen };
export default TabNavigator;