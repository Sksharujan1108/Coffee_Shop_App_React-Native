/* eslint-disable no-duplicate-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { StyleSheet } from 'react-native'
import HomeScreen from '../../screens/App/HomeScreen';
import CartScreen from '../../screens/App/CartScreen';
import FavoriteScreen from '../../screens/App/FavoriteScreen';
import OderHistoryScreen from '../../screens/App/OderHistoryScreen';
import { COLORS } from '@/src/theme/theme';
// eslint-disable-next-line no-duplicate-imports
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//   } from 'react-native-responsive-screen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions = {{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        // Name Not Show
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        // tabBarBackground: () => (
        //     <BlurView
        //       overlayColor=""
        //       blurAmount={15}
        //       style={styles.BlurViewStyles}
        //     />
        // ),
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options = {{
        tabBarIcon: ({ focused,color,size }) => (
          <Ionicons 
            name = 'home'
            size = {28}
            color = {
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
          />
        )
      }}/>
      <Tab.Screen name="Cart" component={CartScreen} options = {{
        tabBarIcon: ({ focused,color,size }) => (
          <Ionicons 
            name = 'cart'
            size = {28}
            color = {
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
          />
        )
      }} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options = {{
        tabBarIcon: ({ focused,color,size }) => (
          <Ionicons 
            name = 'heart'
            size = {28}
            color = {
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
          />
        )
      }}/>
      <Tab.Screen name="History" component={OderHistoryScreen} options = {{
        tabBarIcon: ({ focused,color,size }) => (
          <FontAwesome 
            name = 'bell'
            size = {28}
            color = {
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
          />
        )
      }}/>
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 70,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA, 
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent'
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})