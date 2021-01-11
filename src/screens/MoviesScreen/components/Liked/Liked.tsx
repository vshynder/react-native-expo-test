import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { observer } from 'mobx-react-lite';

import MoviesState from '../../MoviesState';
import MovieCard from '../Overview/MovieCard';
import { Colors } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    paddingHorizontal: 20,
  },
});
interface LikedProps {}

const Liked = ({}: LikedProps) => {
  useEffect(() => {
    MoviesState.getSaved();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {MoviesState.favouriteMovies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Liked);
