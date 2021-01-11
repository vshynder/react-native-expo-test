import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { IMAGE_TNUMB, Colors } from '../../constants';
import { BottomTabsType } from '../../../../NavigationConfig';
import { Movie } from '../../MoviesState';

const aspectRatio = 750 / 500;
const IMAGE_WIDTH = 100;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  imageContainer: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * aspectRatio,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 15,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
    width: undefined,
    height: undefined,
  },
  info: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: 10,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    color: 'white',
    opacity: 0.8,
  },
  ratingBox: {
    paddingVertical: 2,
    paddingHorizontal: 7,
    marginVertical: 5,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  genres: {
    color: 'white',
    opacity: 0.6,
  },
});

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigation = useNavigation<
    BottomTabNavigationProp<BottomTabsType, 'Detail'>
  >();
  const imagePath = movie.poster_path ? IMAGE_TNUMB(movie.poster_path) : '';

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { movie })}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imagePath }} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.ratingBox}>
          <Text style={styles.rating}>{movie.vote_average}</Text>
        </View>
        <Text style={styles.genres}>{movie.genres}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
