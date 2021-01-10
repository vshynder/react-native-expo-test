import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { observer } from 'mobx-react-lite';

import moviesState from '../../MoviesState';
import MovieCard from './MovieCard';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollview: {
    paddingHorizontal: 20,
  },
});

const Overwiev = () => {
  useEffect(() => {
    moviesState.fetchMovies();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        {moviesState.movies.map((movie) => (
          <MovieCard
            thumbnail={movie.poster_path ? movie.poster_path : ''}
            title={movie.title}
            rating={movie.vote_average}
            genres={movie.genres}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Overwiev);
