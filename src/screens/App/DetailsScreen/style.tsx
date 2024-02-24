import {StyleSheet} from 'react-native'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '@/src/theme/theme';

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
      fontSize: FONTSIZE.size_20,
      color: COLORS.primaryWhiteHex,
      paddingLeft: SPACING.space_10,
      paddingBottom: SPACING.space_4,
    },
    DescriptionText: {
      letterSpacing: 0.8,
      fontFamily: FONTFAMILY.poppins_regular,
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
      paddingLeft: SPACING.space_16,
      paddingHorizontal: SPACING.space_12,
      paddingVertical: SPACING.space_12,
      // backgroundColor: COLORS.primaryOrangeHex,
    }
})