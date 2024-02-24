/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import { Ionicons } from '@expo/vector-icons';
import BGIcon from './BGIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32

interface CoffeeCardProps {
    id: string | number,
    index: number,
    type: string,
    roasted: string, // Fix typo here
    imagelink_square: ImageProps, // Update here
    special_ingredient: string,
    name: string,
    average_rating: number,
    price: any;
    buttonPressHandler: any,
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
    id, 
    type, 
    index, 
    roasted, 
    imagelink_square, 
    special_ingredient, 
    name, 
    average_rating, 
    price, 
    // buttonPressHandler
}) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.CardLinerGradientContainer}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        >
            <ImageBackground
                style={styles.CartImageBG}
                source={imagelink_square}
                resizeMode='cover'
            >
                <View style={styles.CartRatingContainer}>
                    <Ionicons
                        name={'star'}
                        size={FONTSIZE.size_20}
                        color={COLORS.primaryOrangeHex}
                    />
                    <Text style={styles.CartRatingText}> {average_rating} </Text>
                </View>

            </ImageBackground>

            <Text style = {styles.CardTitle}> {name} </Text>
            <Text style = {styles.CardSubtitle}> {special_ingredient} </Text>

            <View style = {styles.CartFooterRow}>
                <Text style = {styles.CardPriceCurrency}> $ 
                   <Text style = {styles.CardPrice}> {price} </Text> 
                </Text>
                <TouchableOpacity onPress = {() => {}}>
                    <BGIcon
                        color={COLORS.primaryWhiteHex}
                        name={'add'}
                        size={FONTSIZE.size_18}
                        BGColor={COLORS.primaryOrangeHex}
                    />
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}

export default CoffeeCard

const styles = StyleSheet.create({
    CardLinerGradientContainer: {
        padding: SPACING.space_15,
        borderRadius: BORDERRADIUS.radius_25,
    },
    CartImageBG: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: BORDERRADIUS.radius_20,
        marginBottom: SPACING.space_15,
        overflow: 'hidden',
    },
    CartRatingContainer: {
      flexDirection: 'row',
      backgroundColor: COLORS.primaryBlackRGBA,
      justifyContent: 'center',
      alignItems: 'center',
      gap: SPACING.space_10,
      paddingHorizontal: SPACING.space_15,
      position: 'absolute',
      borderBottomLeftRadius: BORDERRADIUS.radius_20,
      borderTopRightRadius: BORDERRADIUS.radius_20,
      top: 0,
      right: 0,
    },
    CartRatingText: {
      fontFamily: FONTFAMILY.poppins_medium,
      color: COLORS.primaryWhiteHex,
      lineHeight: 22,
      fontSize: FONTSIZE.size_14,
    },
    CardTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16,
      },
      CardSubtitle: {
        fontFamily: FONTFAMILY.poppins_light,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_10,
      },
    CartFooterRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: SPACING.space_15,
    },
    CardPriceCurrency: {
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryOrangeHex,
        fontSize: FONTSIZE.size_18,
        // gap: SPACING.space_2
    },
    CardPrice: {
        color: COLORS.primaryWhiteHex
    }
})
