import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawer from './Screens/Components/NavigationDrawer';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();


export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Auth' component={AuthStack} options={{ headerShown: false }} />
      <Stack.Screen name='drawer' component={NavigationDrawer} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
