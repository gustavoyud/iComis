import React, {FC} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROUTES} from '~/screens/tabs';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, mr, mt} from '~/shared/styles/utils';
import {styles} from './styles';
Icon.loadFont();

export type SubCategory = {
  label: string;
  key?: string;
  backgroundColor: string;
  route?: ROUTES;
  image?: string;
};

type Props = {
  subCategories: SubCategory[];
};

const SubCategories: FC<Props> = ({subCategories}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {subCategories.map(({label, backgroundColor, image}) => (
        <TouchableOpacity style={mr(15)}>
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
