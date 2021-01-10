import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import { IMAGE_TNUMB } from '../../../../constants';

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
    paddingBottom: 10,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    color: 'white',
    opacity: 0.8,
    marginBottom: 3,
  },
  genres: {
    color: 'white',
    opacity: 0.6,
  },
});

interface MovieCardProps {
  title: string;
  thumbnail: string;
  rating: number;
  genres: string;
}

const MovieCard = ({ title, thumbnail, rating, genres }: MovieCardProps) => {
  const imagePath = IMAGE_TNUMB(thumbnail);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imagePath }} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.genres}>{genres}</Text>
      </View>
    </View>
  );
};

export default MovieCard;
