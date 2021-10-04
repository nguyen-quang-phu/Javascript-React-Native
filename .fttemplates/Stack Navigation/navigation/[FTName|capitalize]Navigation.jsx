import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const <FTName | capitalize>Navigation = () => (
    <Stack.Navigator>
      <Stack.Screen name="component" component={ComponentScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default <FTName | capitalize>Navigation;
