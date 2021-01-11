import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { observer } from 'mobx-react-lite';
import { RouteProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import MoviesState from '../../MoviesState';
import { Colors, IMAGE_FULL } from '../../constants';
import { OverviewStackType } from '../../../../NavigationConfig';
import Content from './Content';

const { height: wHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  gradient: {
    width: '100%',
    height: wHeight / 3,
    zIndex: 2,
  },
  imageContainer: {
    height: wHeight / 3,
    width: '100%',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});

type RoutePropType = RouteProp<OverviewStackType, 'Detail'>;

interface DetailPageProps {
  route: RoutePropType;
}

const DetailPage = ({ route }: DetailPageProps) => {
  const { movie } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LinearGradient
          style={styles.gradient}
          colors={['transparent', Colors.background]}
          locations={[0.3, 1]}
        />
        <Image
          style={styles.image}
          source={{ uri: IMAGE_FULL(movie.backdrop_path) }}
        />
      </View>
      <View style={styles.content}>
        <Content movie={movie} />
      </View>
    </View>
  );
};

export default observer(DetailPage);
