import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import GuidesAndTips from '../DrawerMenuScreens/GuideAndTips'
import PatientHistory from '../DrawerMenuScreens/PatientHistory'
import Feedback from '../DrawerMenuScreens/Feedback'
import Settings from '../DrawerMenuScreens/Settings'
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator()

export default function NavigationDrawer() {
  return (
    <>
     
     <Drawer.Navigator initialRouteName='TabNavigator'
         
         screenOptions={{

            headerStyle:{
                backgroundColor:'skyblue',
            },
            headerTitleAlign:'center',
            headerTintColor:'white'   
         }}

     >
         <Drawer.Screen name='DashBoard' component={TabNavigator} options={{ headerTitle: 'UroVision' }}/>
         <Drawer.Screen name='Guides and Tips' component={GuidesAndTips} options={{ headerTitle: 'UroVision' }} />
         <Drawer.Screen name='Patient History' component={PatientHistory} options={{ headerTitle: 'UroVision' }} />
         <Drawer.Screen name='Feedback' component={Feedback} options={{ headerTitle: 'UroVision' }} />
         <Drawer.Screen name='Settings' component={Settings} options={{ headerTitle: 'UroVision' }} />
     </Drawer.Navigator>
    </>
  )
}
