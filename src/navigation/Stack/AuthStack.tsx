import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import DetailsScreen from '@/screens/App/DetailsScreen';
// import PaymentScreen from '@/screens/App/PaymentScreen';
import DetailsScreen from '../../screens/App/DetailsScreen';
import PaymentScreen from '../../screens/App/PaymentScreen';
import BottomTab from '../Tab/BottomTab';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions = {{ headerShown: false }}>
      <Stack.Screen 
        name="Tab" 
        component={BottomTab} 
        options = {{
            animation: 'slide_from_bottom'
        }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options = {{
            animation: 'slide_from_bottom'
        }}
      />
      <Stack.Screen 
        name="Payment" 
        component={PaymentScreen} 
        options = {{
            animation: 'slide_from_bottom'
        }}
      />
    </Stack.Navigator>

  )
}

export default AuthStack
