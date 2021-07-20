import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { EventArg, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import { TickersStoreContext } from '@/stores';
import { About, Tickers } from '@/screens';
import { tabInfo, TabNames } from './types';
import { ChartsSVG, InfoSVG } from '@/assets/svg';
import { Colors } from '@/constants/colors';
import { styles } from './styles';

const Tab = createBottomTabNavigator();

const tabsInfo: Record<TabNames, tabInfo> = {
  About: { label: 'О приложении', icon: InfoSVG },
  Tickers: { label: 'Котировки', icon: ChartsSVG },
};

export const AppStackNavigator = () => {
  const { Navigator, Screen } = Tab;
  const tickersStore = useContext(TickersStoreContext);

  const customTabPress = (e: EventArg<string>) => {
    if (e.target?.includes(TabNames.Tickers)) {
      tickersStore.startLoading();
    } else {
      tickersStore.stopLoading();
    }
  };

  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          showLabel: false,
          style: styles.tabBarContainer,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const routeName = route.name as TabNames;
            const TagSVG = tabsInfo[routeName].icon;
            const activeColor = focused ? Colors.eucalyptus : Colors.dustyGray;

            return (
              <View style={styles.tabWrapper}>
                <TagSVG fill={activeColor} />
                <Text style={[styles.textLabel, { color: activeColor }]}>{tabsInfo[routeName].label}</Text>
              </View>
            );
          },
        })}
      >
        <Screen
          name={TabNames.About}
          component={About}
          listeners={{
            tabPress: customTabPress,
          }}
        />
        <Screen
          name={TabNames.Tickers}
          component={Tickers}
          listeners={{
            tabPress: customTabPress,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
