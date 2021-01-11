import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

import MovieCard from './MovieCard';
import moviesState from '../../MoviesState';
import { Colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollview: {
    paddingHorizontal: 20,
  },
});

interface MoviesContainerProps {}

const MoviesContainer = ({}: MoviesContainerProps) => {
  useEffect(() => {
    moviesState.fetchMovies();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        {moviesState.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(MoviesContainer);
