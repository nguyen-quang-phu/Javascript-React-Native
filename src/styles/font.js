import { TextStyle } from 'react-native';

import { scaleFont } from './mixins';

// FONT FAMILY
/** @type {TextStyle["fontFamily"]} */
export const FONT_FAMILY_REGULAR = 'Roboto-Regular';
/** @type {TextStyle["fontFamily"]} */
export const FONT_FAMILY_BOLD = 'Roboto-Bold';

// FONT WEIGHT

/** @type {TextStyle['fontWeight']} */
export const FONT_WEIGHT_REGULAR = '400';
/** @type {TextStyle['fontWeight']} */
export const FONT_WEIGHT_BOLD = 'bold';

// FONT SIZE
export const FONT_SIZE_36 = scaleFont(36);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_11 = scaleFont(11);
export const FONT_SIZE_8 = scaleFont(8);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_22 = scaleFont(22);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);
export const LINE_HEIGHT_11 = scaleFont(11);
export const LINE_HEIGHT_8 = scaleFont(8);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
