import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

interface EmptyListAnimationProps {
    title: string,
}

const EmptyListAnimation = (props:EmptyListAnimationProps) => {
    const {
        title,
    } = props
  return (
    <View style = {styles.EmptyCartContainer}>

      <LottieView
        style = {styles.LottieStyle}
        source = {require('../lottie/CoffeeLottie.json')}
        autoPlay = {true}
        loop = {true}
      />
      <Text style = {styles.LottieText}>{title}</Text>

    </View>
  )
}

export default EmptyListAnimation

const styles = StyleSheet.create({
    EmptyCartContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    LottieStyle: {
      height: 250,
    },
    LottieText: {
       paddingTop: SPACING.space_28,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryOrangeHex,
        alignSelf: 'center',
    }
})