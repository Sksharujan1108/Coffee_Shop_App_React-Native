import {StyleSheet} from 'react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '@/src/theme/theme';

export const styles = StyleSheet.create({
    ScreenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
        // change the backgroundColor of scrollView to transparent so that it can
      flexGrow: 1,
    },
    FooterInfoArea: {
      padding: SPACING.space_20,
    },
    InfoTitle: {
      fontFamily: FONTFAMILY.poppins_semibold,
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryWhiteHex,
      paddingLeft: SPACING.space_10,
      paddingBottom: SPACING.space_4,
    },
    DescriptionText: {
      letterSpacing: 0.8,
      fontFamily: FONTFAMILY.poppins_regular,
      fontSize: FONTSIZE.size_14,
      color: COLORS.primaryWhiteHex,
      paddingLeft: SPACING.space_16,
      paddingHorizontal: SPACING.space_12,
      paddingVertical: SPACING.space_12,
      // backgroundColor: COLORS.primaryOrangeHex,
    },
    SizeOuterContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between',
      gap:SPACING.space_20,
    },
    SizeBox: {
      flex: 1,
      backgroundColor: COLORS.primaryDarkGreyHex,
      borderRadius: BORDERRADIUS.radius_15,
      height: SPACING.space_24 * 2 ,
      justifyContent:'center',
      alignItems: 'center',
      borderWidth: 2,
    }, 
    SizeText: {
      fontFamily: FONTFAMILY.poppins_regular,
    }
})