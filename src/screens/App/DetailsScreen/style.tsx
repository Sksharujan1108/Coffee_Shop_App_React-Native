import {StyleSheet} from 'react-native'
import { COLORS } from '@/src/theme/theme';

export const styles = StyleSheet.create({
    ScreenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
        // change the backgroundColor of scrollView to transparent so that it can
      flexGrow: 1,
      
    }
})