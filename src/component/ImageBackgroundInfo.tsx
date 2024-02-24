/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GradientBGIcon from './GradientBGIcon';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



interface ImageBackgroundInfoProps {
    EnableBackHandle: boolean;
    imagelink_portrait: ImageProps;
    type: string;
    id: string;
    favourite: boolean;
    name: string;
    special_ingredient: string,
    ingredients: string,
    average_rating: number | number,
    ratings_count: string,
    roasted: string,
    BackHandler?: any,
    ToggleFavorite: any,
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
    EnableBackHandle,
    imagelink_portrait,
    type,
    id,
    favourite,
    name,
    special_ingredient,
    ingredients,
    average_rating,
    ratings_count,
    roasted,
    BackHandler,
    ToggleFavorite,
}) => {
  return (
    <View>
       <ImageBackground
         style = {styles.ImageBackgroundImage}
         source = {imagelink_portrait}
       >
        {EnableBackHandle ? (
            <View style = {styles.ImageHeaderContainerWithBack}>
                <TouchableOpacity 
                  onPress={() => {
                    BackHandler()
                  }}
                >
                  <GradientBGIcon
                     name = 'arrow-left-drop-circle'
                     color = {COLORS.primaryLightGreyHex}
                     size = {FONTSIZE.size_28}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    ToggleFavorite(favourite, type, id)
                  }}
                >
                  <GradientBGIcon
                     name = 'heart-circle'
                     color = { 
                        favourite ? COLORS.primaryRedHex :COLORS.primaryLightGreyHex 
                     }
                     size = {FONTSIZE.size_28}
                  />
                </TouchableOpacity>
            </View>
        ) : (
            <View style = {styles.ImageHeaderContainerWithOutBack}>
                <TouchableOpacity
                  onPress={() => {
                    ToggleFavorite(favourite, type, id)
                  }}
                >
                  <GradientBGIcon
                     name = 'heart-circle'
                     color = { 
                        favourite ? COLORS.primaryRedHex :COLORS.primaryLightGreyHex 
                     }
                     size = {FONTSIZE.size_28}
                  />
                </TouchableOpacity>
            </View>
        )} 

            <View style = {styles.ImageInfoOuterContainer}>
                <View style = {styles.ImageInfoInnerContainer}>
                  <View style = {styles.InfoContainerRow}>
                    <View>
                        <Text style = {styles.ItemTitleText}> {name} </Text>
                        <Text style = {styles.ItemSubTitleText}> {special_ingredient} </Text>
                    </View>
                    
                    <View style = {styles.ItemPropertiesContainer}>
                        <View style = {styles.ProperFirst}>
                            <Ionicons 
                              name = {type === 'Bean' ? 'bean' : 'beans'}
                              size = {type === 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                              color = {COLORS.primaryOrangeHex}
                            />
                            <Text 
                              style = {[
                                styles.ProperTextFirst, 
                                {
                                    marginTop: 
                                      type === 'Bean' 
                                        ? SPACING.space_4 + SPACING.space_2
                                        : 0
                                }]}> {type} 
                            </Text>
                        </View>

                        <View style = {styles.ProperFirst}>
                            {type === 'Bean' 
                                ?   <Ionicons 
                                      name = 'location-sharp'
                                      size = {FONTSIZE.size_24}
                                      color = {COLORS.primaryOrangeHex}
                                    />
                                :   <Entypo 
                                       name="drop"
                                       size = {FONTSIZE.size_20}
                                       color = {COLORS.primaryOrangeHex}
                                    />
                            }
                                {/* <Ionicons
                                  name={type == 'Bean' ? 'location' : 'drop'}
                                  size={FONTSIZE.size_16}
                                  color={COLORS.primaryOrangeHex}
                                />  */}
                            <Text style = {styles.ProperTextLast}>  
                                {ingredients} 
                            </Text>
                        </View>
                    </View>
                  </View>

                  <View style = {styles.InfoContainerRow}>
                    <View style = {styles.RatingContainer}>
                        <Ionicons
                           name = 'star'
                           size = {FONTSIZE.size_20}
                           color = {COLORS.primaryOrangeHex}
                        />

                        <Text style = {styles.RatingText}> {average_rating} </Text>
                        <Text style = {styles.RatingCountText}> ({ratings_count}) </Text>
                    </View>

                    <View style={styles.RoastedContainer}>
                      <Text style={styles.RoastedText}>{roasted}</Text>
                    </View> 
                  </View>

                </View>
            </View>
       </ImageBackground>
    </View>
  )
}

export default ImageBackgroundInfo;

const styles = StyleSheet.create({
    ImageBackgroundImage: {
        width: '100%',
        aspectRatio: 20/25,
        justifyContent: 'space-between',
    },
    ImageHeaderContainerWithBack: {
        padding: SPACING.space_30,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ImageHeaderContainerWithOutBack: {
        padding: SPACING.space_30,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    ImageInfoOuterContainer: {
        paddingVertical: SPACING.space_15,
        paddingHorizontal: SPACING.space_30,
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopLeftRadius: BORDERRADIUS.radius_20*2,
        borderTopRightRadius: BORDERRADIUS.radius_20*2,
    },
    ImageInfoInnerContainer: {
        justifyContent: 'space-between',
        gap: SPACING.space_15,
    },
    InfoContainerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ItemTitleText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_24,
        color: COLORS.primaryWhiteHex
    },
    ItemSubTitleText: {
        padding: SPACING.space_4,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex
    },
    ItemPropertiesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap : SPACING.space_20,
    },
    ProperFirst: {
        height: 60,
        width: 60,
        borderRadius: BORDERRADIUS.radius_15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBlackHex
    },
    ProperTextFirst: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryWhiteHex
    },
    ProperTextLast: {
      fontFamily: FONTFAMILY.poppins_medium,
      fontSize: FONTSIZE.size_12,
      color: COLORS.primaryWhiteHex,
      marginTop: SPACING.space_4 + SPACING.space_2
    },
    RatingContainer: {
      flexDirection: 'row',
      gap: SPACING.space_10,
      alignItems: 'center',
    },
    RatingText: {
      fontFamily: FONTFAMILY.poppins_semibold,
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryWhiteHex,
    },
    RatingCountText: {
      fontFamily: FONTFAMILY.poppins_regular,
      fontSize: FONTSIZE.size_12,
      color: COLORS.primaryWhiteHex,
    },
     RoastedContainer: {
      height: 55,
      width: 55 * 2 + SPACING.space_20,
      borderRadius: BORDERRADIUS.radius_15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.primaryBlackHex,
    },
    RoastedText: {
      fontFamily: FONTFAMILY.poppins_regular,
      fontSize: FONTSIZE.size_12,
      color: COLORS.primaryWhiteHex,
    },
})