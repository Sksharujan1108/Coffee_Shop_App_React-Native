import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

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
        source = {require('../lottie/coffeecup.json')}
        autoPlay
        loop
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
      height: 300,
    },
    LottieText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryOrangeHex
    }
})