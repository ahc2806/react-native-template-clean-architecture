import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

export default {
  strict: {
    'text-font-family': 'ProximaNova-Regular',

    'text-heading-1-font-size': 36,
    'text-heading-1-font-weight': isIOS ? '900' : 'normal',
    'text-heading-1-font-family': 'ProximaNova-Black',

    'text-heading-2-font-size': 32,
    'text-heading-2-font-weight': isIOS ? '800' : 'normal',
    'text-heading-2-font-family': 'ProximaNova-Black',

    'text-heading-3-font-size': 30,
    'text-heading-3-font-weight': isIOS ? '800' : 'normal',
    'text-heading-3-font-family': 'ProximaNova-Black',

    'text-heading-4-font-size': 26,
    'text-heading-4-font-weight': isIOS ? '800' : 'normal',
    'text-heading-4-font-family': 'ProximaNova-Black',

    'text-heading-5-font-size': 22,
    'text-heading-5-font-weight': isIOS ? '800' : 'normal',
    'text-heading-5-font-family': 'ProximaNova-Black',

    'text-heading-6-font-size': 18,
    'text-heading-6-font-weight': isIOS ? '800' : 'normal',
    'text-heading-6-font-family': 'ProximaNova-Black',

    'text-subtitle-1-font-size': 15,
    'text-subtitle-1-font-weight': isIOS ? '600' : 'normal',
    'text-subtitle-1-font-family': 'ProximaNova-Bold',

    'text-subtitle-2-font-size': 13,
    'text-subtitle-2-font-weight': isIOS ? '600' : 'normal',
    'text-subtitle-2-font-family': 'ProximaNova-Bold',

    'text-paragraph-1-font-size': 15,
    'text-paragraph-1-font-weight': isIOS ? '400' : 'normal',
    'text-paragraph-1-font-family': '$text-font-family',

    'text-paragraph-2-font-size': 13,
    'text-paragraph-2-font-weight': isIOS ? '400' : 'normal',
    'text-paragraph-2-font-family': '$text-font-family',

    'text-caption-1-font-size': 12,
    'text-caption-1-font-weight': isIOS ? '500' : 'normal',
    'text-caption-1-font-family': 'ProximaNova-Medium',

    'text-caption-2-font-size': 12,
    'text-caption-2-font-weight': isIOS ? '500' : 'normal',
    'text-caption-2-font-family': 'ProximaNova-Medium',

    'text-label-font-size': 12,
    'text-label-font-weight': isIOS ? '800' : 'normal',
    'text-label-font-family': 'ProximaNova-Bold',

    'size-tiny': 24,
    'size-small': 32,
    'size-medium': 40,
    'size-large': 48,
    'size-giant': 56,
    'border-radius': 4,
    'border-width': 1,
  },
  components: {},
};
