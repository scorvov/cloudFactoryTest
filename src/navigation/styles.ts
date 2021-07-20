import { StyleSheet, TextStyle, ViewProps } from 'react-native';

import { Colors, Fonts, scale } from '@/constants';

type NavigationProps = {
  tabBarContainer: ViewProps;
  tabWrapper: ViewProps;
  textLabel: TextStyle;
};

export const styles = StyleSheet.create<NavigationProps>({
  tabBarContainer: {
    backgroundColor: Colors.alto,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: scale(1),
    borderTopColor: Colors.dustyGray,
  },
  tabWrapper: {
    alignItems: 'center',
  },
  textLabel: {
    fontFamily: Fonts.ROBOTO_MEDIUM,
    fontSize: scale(13),
  },
});
