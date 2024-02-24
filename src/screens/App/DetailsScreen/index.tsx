/* eslint-disable @typescript-eslint/no-explicit-any */
import { ScrollView, StatusBar, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '@/src/theme/theme'
import { styles } from './style'
import ImageBackgroundInfo from '@/src/component/ImageBackgroundInfo'
import { useStore } from '@/src/feature/store/store'

const DetailsScreen = ({ navigation, route }: any) => {
  console.log('DetailsScreen', route)

  const [fullDesc, setFullDesc] = useState(false)

  const ItemOfIndex = useStore((state: any) =>
      route.params?.type === 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params?.index]

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
              ) : (
                <TouchableWithoutFeedback  
                  onPress = {() => {setFullDesc(prev => !prev)}}
                >
                  <Text numberOfLines = {3} style = {styles.DescriptionText}> {ItemOfIndex?.description} </Text>
                </TouchableWithoutFeedback>
              )
           }
         </View>

      </ScrollView>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen