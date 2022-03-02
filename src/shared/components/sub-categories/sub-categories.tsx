import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROUTES} from '~/screens/bottom-menu/tabs';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, mr, mt} from '~/shared/styles/utils';
import {styles} from './styles';
Icon.loadFont();

/**
 * Subcategory type
 */
export type SubCategory<T = ROUTES> = {
  label: string;
  key?: string;
  category?: string;
  backgroundColor: string;
  route?: T;
  image?: string;
};

/**
 * Sub categories props
 */
type Props = {
  subCategories: SubCategory[];
};

/**
 * Sub categories component
 */
const SubCategories: FC<Props> = ({subCategories}) => {
  /**
   * Navigation instance
   */
  const navigation = useNavigation();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {subCategories.map(({label, backgroundColor, image, route, category}) => (
        <TouchableOpacity
          onPress={() => route && navigation.navigate?.(route, {name: label, category})}
          style={mr(15)}>
          <View style={styles.imageContainer}>
            <Image source={{uri: image}} style={styles.absoluteImage} />
            <View style={[{backgroundColor}, styles.category]} />
          </View>
          <Text style={[filson('Regular', 14, BASE_COLORS.textMedium, 'center'), mt(10)]}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SubCategories;
