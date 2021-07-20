import React, { FC, useEffect } from 'react';
import { FlatList, View, Text, ListRenderItem, Animated, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Ticker, ContentStatus, Tickers } from '@/stores/types';
import { Colors } from '@/constants';
import { styles } from './styles';

export type TickersTablePropsType = {
  data: Tickers;
  status: ContentStatus;
};

export const TickersTable: FC<TickersTablePropsType> = ({ data, status }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 3,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  const colorInterpolation = fadeAnim.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [Colors.dustyGray, Colors.dustyGray02, Colors.dustyGray, Colors.dustyGray02],
  });

  const renderHeader = () => {
    switch (status) {
      case ContentStatus.Init:
        return (
          <View style={styles.containerIndicator}>
            <ActivityIndicator size="large" color={Colors.deYork} />
          </View>
        );
      case ContentStatus.Error:
        return (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{'Ошибка'}</Text>
          </View>
        );
      default:
        return null;
    }
  };

  const renderItem: ListRenderItem<Ticker> = ({ item }) => {
    const { name, last, highestBid, percentChange } = item;
    const backgroundColor = item.isChanged ? colorInterpolation : 'transparent';
    const percentChangeStyles = percentChange > 0 ? styles.percentPositive : styles.percentNegative;

    return (
      <Animated.View style={[styles.item, { backgroundColor }]}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.last}>{last}</Text>
        <Text style={styles.high}>{highestBid}</Text>
        <Text style={percentChangeStyles}>{percentChange}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        windowSize={13}
      />
      <LinearGradient
        colors={[Colors.godGray, Colors.godGray02]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 3 }}
        style={styles.bottomGradient}
      />
    </View>
  );
};
