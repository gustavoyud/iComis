import {MaterialTopTabBar, MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from '../../../shared/styles/colors';
import {filson} from '../../../shared/styles/utils';
import {styles} from './styles';

Icon.loadFont();
CommunityIcons.loadFont();

/**
 * Custom tab bar
 */
const CustomTabBar: FC<MaterialTopTabBarProps> = props => {
  return (
    <SafeAreaView style={{backgroundColor: BASE_COLORS.mainBackground}}>
      <View style={styles.tabBarRow}>
        <Text style={filson('Medium', 14, BASE_COLORS.textMedium)}>Rua da minha casa, 1235</Text>
        <CommunityIcons name="qrcode-scan" size={26} color={BASE_COLORS.primary600} />
      </View>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
};

export default CustomTabBar;
