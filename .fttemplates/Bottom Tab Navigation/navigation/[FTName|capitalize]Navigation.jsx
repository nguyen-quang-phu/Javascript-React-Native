import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const options = ({ route }) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = null;
      switch (route.name) {
        case 'home':
          iconName = focused ? 'home' : 'home-outline';
          break;
        default:
          iconName='home'
      }

      return <Icon name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const AppNavigation = () => (
  <Tab.Navigator screenOptions={options}>
    <Tab.Screen name="home" component={HomeScreen} />
  </Tab.Navigator>
);

export default AppNavigation;
