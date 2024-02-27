 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
import { useStore } from '@/src/feature/store/store'
 
 const CartScreen = () => {
  const CartList = useStore((state: any) => state.CartList) 
  console.log('CoffeeList********CartList***', CartList)
   return (
     <View>
       <Text>CartScreen</Text>
     </View>
   )
 }
 
 export default CartScreen
 
 const styles = StyleSheet.create({})