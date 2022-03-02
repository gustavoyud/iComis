import {MaterialTopTabBar, MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, flex} from '~/shared/styles/utils';
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
        <TouchableOpacity style={flex('space-between')}>
          <Text style={filson('Medium', 14, BASE_COLORS.textMedium)}>Rua da minha casa, 1235</Text>
          <CommunityIcons size={16} name="chevron-down" color={BASE_COLORS.primary500} />
        </TouchableOpacity>
        <CommunityIcons name="qrcode-scan" size={26} color={BASE_COLORS.primary500} />
      </View>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
};

export default CustomTabBar;
