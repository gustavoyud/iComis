import React, {FC, useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '~/shared/store';
import {setFilters} from '~/shared/store/filters/action';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, flex, ml, mr} from '~/shared/styles/utils';
import {styles} from './styles';

Icon.loadFont();

/**
 * Redux state
 */
const mapState = ({filters}: RootState) => ({currentFilters: filters});

/**
 * Map dispatch redux functions
 */
const mapDispatch = {
  setCurrentFilters: setFilters,
};

/**
 * Redux connector
 */
const connector = connect(mapState, mapDispatch);

/**
 * Redux props
 */
type PropsFromRedux = ConnectedProps<typeof connector>;

export type Filter = {
  label: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  key: string;
};

type Props = PropsFromRedux & {
  filters: Filter[];
};

const Filters: FC<Props> = ({filters, currentFilters, setCurrentFilters}) => {
  /**
   * Selected
   */
  const [selected, setRepeatType] = useState(new Map());

  /**
   * Select filter
   *
   * @param filter - filter to be applied
   */
  function selectFilter(filter: string) {
    const currentSelected = new Map(selected);
    let currentFilter = [...currentFilters.selectedKeys];

    if (!currentSelected.get(filter)) {
      currentSelected.set(filter, !selected.get(filter));
      currentFilter.push(filter);
    } else {
      currentSelected.delete(filter);
      currentFilter = currentFilter.filter(value => value !== filter);
    }

    setCurrentFilters(currentFilter);
    setRepeatType(currentSelected);
  }

  return (
    <ScrollView
      contentContainerStyle={[{width: filters?.length * 125}, flex('space-between')]}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {filters?.map(({label, key, iconPosition, icon}) => {
        const color = selected.get(key) ? BASE_COLORS.primary500 : BASE_COLORS.textMedium;
        return (
          <TouchableOpacity
            onPress={() => selectFilter(key)}
            style={[
              styles.pill,
              selected.get(key) && styles.active,
              iconPosition === 'left' && styles.reverseRow,
            ]}
            key={key}>
            <Text style={[filson('Medium', 14, color), iconPosition === 'left' ? ml(5) : mr(5)]}>
              {label}
            </Text>
            {icon && <Icon name={icon} color={color} size={14} />}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default connector(Filters);
