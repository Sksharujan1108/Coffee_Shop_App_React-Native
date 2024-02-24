import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '@/src/theme/theme'
import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    ScreenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
      flexGrow: 1,
    },
    ScreenTitle: {
      fontSize: FONTSIZE.size_28,
      fontFamily: FONTFAMILY.poppins_semibold,
      color: COLORS.primaryWhiteHex,
      paddingLeft: SPACING.space_28,
    },
    InputContainerComponent: {
      flexDirection: 'row',
      margin: SPACING.space_28,
      borderRadius: BORDERRADIUS.radius_20,
      backgroundColor: COLORS.primaryDarkGreyHex,
      alignItems: 'center',
    },
    InputIcon: {
      marginHorizontal: SPACING.space_20,
    },
    TextInputContainer: {
      flex: 1,
      height: SPACING.space_20 * 2.5,
      fontFamily: FONTFAMILY.poppins_medium,
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryWhiteHex,
      elevation: 20,
    },
    CategoryScrollViewStyle: {
      paddingHorizontal: SPACING.space_20,
      marginBottom: SPACING.space_20
    },
    CategoryScrollViewContainer: {
      paddingHorizontal: SPACING.space_15,
      // marginBottom: SPACING.space_20,
    },
    CategoryScrollViewItem: {
      alignItems: 'center',
    },
    CategoryText: {
      fontFamily: FONTFAMILY.poppins_semibold,
      fontSize: FONTSIZE.size_14,
      color: COLORS.primaryWhiteHex,
      marginBottom: SPACING.space_4,
    },
    ActiveCategory: {
      height: SPACING.space_10,
      width: SPACING.space_10,
      borderRadius: BORDERRADIUS.radius_10,
      backgroundColor: COLORS.primaryOrangeHex,
    },
    EmptyListContainer: {
      width: Dimensions.get('window').width - SPACING.space_30 * 2,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: SPACING.space_30 * 2,
    },
    FlatListContainer: {
      gap: SPACING.space_20,
      paddingVertical: SPACING.space_20,
      paddingHorizontal: SPACING.space_30
    },
    CoffeeBeansTitle: {
      fontSize: FONTSIZE.size_18,
      marginLeft: SPACING.space_30,
      marginTop: SPACING.space_20,
      fontFamily: FONTFAMILY.poppins_medium,
      color: COLORS.secondaryLightGreyHex,
    }

})