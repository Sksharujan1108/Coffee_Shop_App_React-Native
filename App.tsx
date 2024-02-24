import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStack from './src/navigation/Stack/AuthStack';
import { StatusBar } from 'react-native';
import { COLORS } from './src/theme/theme';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar  backgroundColor = {COLORS.primaryBlackRGBA} />
       <AuthStack/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
