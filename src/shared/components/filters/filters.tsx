import React, {FC} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BASE_COLORS} from '../../styles/colors';
import {filson, mt} from '../../styles/utils';
import {styles} from './styles';

Icon.loadFont();

export type Filter = {
  label: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  isActive: boolean;
  key: string;
};

type Props = {
  filters: Filter[];
};

const Filters: FC<Props> = ({filters}) => {
  return (
    <ScrollView style={mt(15)} horizontal showsHorizontalScrollIndicator={false}>
      {filters?.map(({label, key, iconPosition, icon}, index) => (
        <TouchableOpacity
          style={[styles.pill, index !== filters?.length ? styles.gap : {}]}
          key={key}>
          <Text style={filson('Regular', 14, BASE_COLORS.textMedium)}>{label}</Text>
          {/* { iconPosition === 'left' && icon && </>} */}
          {icon && <Icon name={icon} />}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
