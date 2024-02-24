/* eslint-disable @typescript-eslint/no-explicit-any */
import { ScrollView, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTSIZE, SPACING } from '@/src/theme/theme'
import { styles } from './style'
import ImageBackgroundInfo from '@/src/component/ImageBackgroundInfo'
import { useStore } from '@/src/feature/store/store'
import PaymentFooter from '@/src/component/PaymentFooter'

const DetailsScreen = ({ navigation, route }: any) => {
  console.log('DetailsScreen', route)

  const [fullDesc, setFullDesc] = useState(false)

  const ItemOfIndex = useStore((state: any) =>
      route.params?.type === 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params?.index]

  const [price, setPrice] = useState(ItemOfIndex.prices[0])

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList)

  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList)

  const ToggleFavorite = ( favourite: boolean, type: string, id: string) => {
    favourite ?  deleteFromFavoriteList(type, id) : addToFavoriteList(type, id)
  }

  const BackHandler = () => {
    navigation.pop()
  }

  console.log('ItemOfIndex', ItemOfIndex?. CoffeeList)

  return (
    <View style = {styles.ScreenContainer}>
      <StatusBar backgroundColor = {COLORS.primaryBlackHex}/> 
      <ScrollView
        showsVerticalScrollIndicator = {false}
        contentContainerStyle = {styles.ScrollViewFlex}
      >
        <ImageBackgroundInfo
          EnableBackHandle = {true}
          imagelink_portrait = {ItemOfIndex?.imagelink_portrait}
          type = {ItemOfIndex?.type}
          id = {ItemOfIndex?.id}
          favourite = {ItemOfIndex?.favourite}
          name = {ItemOfIndex?.name}
          special_ingredient = {ItemOfIndex?.special_ingredient}
          ingredients = {ItemOfIndex?.ingredients}
          average_rating = {ItemOfIndex?.average_rating}
          ratings_count = {ItemOfIndex?.ratings_count}
          roasted = {ItemOfIndex?.roasted}
          BackHandler = {BackHandler}
          ToggleFavorite = {ToggleFavorite}
        />

        <View style = {styles.FooterInfoArea}>
           <Text style = {styles.InfoTitle}> Description </Text>
            {fullDesc ? 
              (
                <TouchableWithoutFeedback 
                  onPress = {() => {setFullDesc(prev => !prev)}}
                >
                    <Text style = {styles.DescriptionText}> {ItemOfIndex?.description} </Text>
                </TouchableWithoutFeedback>
              ) : 
                (
                  <TouchableWithoutFeedback  
                    onPress = {() => {setFullDesc(prev => !prev)}}
                  >
                    <Text numberOfLines = {3} style = {styles.DescriptionText}> {ItemOfIndex?.description} </Text>
                  </TouchableWithoutFeedback>
                )
            }
            <View style = {{paddingTop: SPACING.space_12}}>
              <Text style = {[styles.InfoTitle, ]}> Size </Text>
            </View>
            
            <View style = {styles.SizeOuterContainer}>
              {ItemOfIndex.prices?.map((data: any) => (
                <TouchableOpacity 
                  key = {data.size}
                  onPress = {() => {
                    setPrice(data);
                  }}
                  style = {[
                    styles.SizeBox, 
                    {
                      borderBlockColor: 
                        data.size === price.size 
                          ? COLORS.primaryOrangeHex
                          : COLORS.primaryDarkGreyHex
                    }
                  ]}
                >
                  <Text 
                    style = {[
                      styles.SizeText,
                      {
                        fontSize: ItemOfIndex.type === 'bean' 
                          ? FONTSIZE.size_18
                          : FONTSIZE.size_24,

                        color: data.size === price.size 
                          ? COLORS.primaryOrangeHex
                          : COLORS.primaryRedHex
                      }
                    ]}
                  > 
                    {data.size} 
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
        </View>

        <PaymentFooter
          price = {price}
          buttonTitle = 'Add to Cart'
          buttonPressHandler = {() => {}}
        />

      </ScrollView>
    </View>
  )
}

export default DetailsScreen