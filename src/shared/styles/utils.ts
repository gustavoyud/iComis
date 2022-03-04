import {FlexStyle, PixelRatio, StyleProp, TextStyle} from 'react-native';
import {BASE_COLORS} from './colors';

/**
 * Style util function to margin bottom value
 *
 * @param value - Margin Value
 */
export function mb(value: number) {
  return margin(value, 'Bottom');
}

/**
 * Style util function to margin top value
 *
 * @param value - Margin Value
 */
export function mt(value: number) {
  return margin(value, 'Top');
}

/**
 * Style util function to margin left value
 *
 * @param value - Margin Value
 */
export function ml(value: number) {
  return margin(value, 'Left');
}

/**
 * Style util function to margin right value
 *
 * @param value - Margin Value
 */
export function mr(value: number) {
  return margin(value, 'Right');
}

/**
 * Filson font utilities
 *
 * @param weight - font weight
 * @param fontSize - font size
 * @param color - font color
 */
export function filson(
  weight: 'Regular' | 'Bold' | 'Medium' = 'Regular',
  fontSize: number = 14,
  color: any = BASE_COLORS.textStrong,
  textAlign: TextStyle['textAlign'] = undefined,
) {
  return {
    fontFamily: `FilsonPro-${weight}`,
    fontSize,
    color,
    textAlign,
  };
}

/**
 * Text align utilities
 *
 * @param textAlign - text align position
 */
export function align(textAlign: TextStyle['textAlign']) {
  return {textAlign};
}

/**
 * Style util function to margin values
 */
export function margin(
  value: number,
  position: 'Bottom' | 'Top' | 'Horizontal' | 'Vertical' | 'Left' | 'Right',
) {
  return {[`margin${position}`]: value};
}

/**
 * Merge styles
 *
 * @param styles - styles list
 */
export function mergeStyles(...styles: any) {
  return styles;
}

type flexDirection =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

/**
 * Style util function to flex values
 *
 * @param justifyContent
 */
export function flex(
  justifyContent: flexDirection = 'space-between',
  alignItems: FlexStyle['alignItems'] = 'center',
): StyleProp<FlexStyle> {
  return {
    flexDirection: 'row',
    alignItems,
    justifyContent,
  };
}

/**
 * Scale font based on pixel ratio
 *
 * @param size - font size
 */
export const scaleFont = (size: number) => size * PixelRatio.getFontScale();
