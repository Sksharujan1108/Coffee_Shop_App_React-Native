 import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
 import React from 'react'
import { useStore } from '@/src/feature/store/store'
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import { styles } from './styles';
import { COLORS } from '@/src/theme/theme';
import HeaderBar from '@/src/component/HeaderBar';
import EmptyListAnimation from '@/src/component/EmptyListAnimation';
import PaymentFooter from '@/src/component/PaymentFooter';
import CartItem from '@/src/component/CartItem';
 
 const CartScreen = ({navigation, route}: any) => {
  const CartList = useStore((state: any) => state.CartList) 
  const CartPrice = useStore((state: any) => state.CartPrice)

  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity)

  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity)

  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice)

  console.log('CoffeeList********CartList***', CartList.length)
  console.log('CartPrice********CartPrice***', CartPrice)

  const tabBarHeight = useBottomTabBarHeight();

  const buttonPressHandler = () => {
    navigation.push('Payment')
  }

   return (
     <View style = {styles.ScreenContainer}>
        <StatusBar backgroundColor= {COLORS.primaryBlackHex} />
        <ScrollView
          showsVerticalScrollIndicator = {false}
          contentContainerStyle = {styles.ScrollViewFlex}
        >
          {/* App Header */}
          <View 
            style = { 
              [
                styles.ScrollViewInnerView , 
                {marginBottom: tabBarHeight}
              ]
            }
          >
            <View style = {styles.ItemContainer}>
              <HeaderBar title = 'Cart' />
              {CartList.length === 0 ? 
                (
                  <EmptyListAnimation title = {'Cart Is Empty'} />
                ) : 
                  (
                    <View style = {styles.ListItemContainer}> 
                      {CartList.map((data: any) => (
                        <TouchableOpacity key = {data.id}
                          onPress = {() => {}} 
                        >
                          <CartItem
                            id = {data.id}
                            name = {data.name}
                            imagelink_square = {data.imagelink_square}
                            special_ingredient = {data.special_ingredient}
                            roasted = {data.roasted}
                            prices = {data.prices}
                            type = {data.type}
                            incrementCartItemQuantityHandler = {() => {}}
                            decrementCartItemQuantityHandler = {() => {}}
                          />
                        </TouchableOpacity>
                      ))}
                    </View>
                  )
              }
            </View>
            {CartList.length !== 0 ? (
              <PaymentFooter
                buttonPressHandler={
                  () => {}
                }
                buttonTitle = 'Pay'
                price = {{price: CartPrice, currency: 'Lk'}}
              /> 
            ): (
              <></>
            )}
          </View>
            
        </ScrollView>
     </View>
   )
 }
 
 export default CartScreen
