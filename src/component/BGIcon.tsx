/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleSheet, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, SPACING } from '../theme/theme'
import { Ionicons } from '@expo/vector-icons';

interface BGIconProps {
    name: string | any;
    size: number;
    color: string;
    BGColor: string;
}
const BGIcon:React.FC<BGIconProps> = ({ name, size, color, BGColor}) => {
  return (
    <View style = {[styles.IconBG, {backgroundColor: BGColor}]}>
       <Ionicons 
         name = {name}
         size = {size}
         color = {color}
       />
    </View>
  )
}

export default BGIcon

const styles = StyleSheet.create({
    IconBG: {
        height: SPACING.space_30,
        width: SPACING.space_30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BORDERRADIUS.radius_8,
    }
})