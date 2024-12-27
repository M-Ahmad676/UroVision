import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScanScreen from '../HomeScreen/Scan';
import HomeScreen from '../HomeScreen/Home';
import AlertScreen from '../HomeScreen/Alert';
import AppointmentScreen from '../HomeScreen/Appointment';
import ProfileScreen from '../HomeScreen/Profile'
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeName = 'Home'

export default function TabNavigator() {
  return (
    <>

    <View style={{flex:1,backgroundColor:'white'}}>
<Tab.Navigator
     
     initialRouteName={HomeName}
     screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Alert') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'scan' : 'scan-outline';
            } else if (route.name === 'Appointment') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'deepskyblue',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { paddingBottom: 5, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 55, borderTopLeftRadius:35, borderTopRightRadius:35,  borderTopWidth: 0 },
        }) }
      >

     <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
     <Tab.Screen name="Alert" component={AlertScreen} options={{headerShown:false}} />
     <Tab.Screen name="Scan" component={ScanScreen}  options={{headerShown:false}}/>
     <Tab.Screen name="Appointment" component={AppointmentScreen} options={{headerShown:false}}/>
     <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>

    </Tab.Navigator>
    </View>
    </>
  )
}
