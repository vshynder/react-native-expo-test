import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { Colors } from '../../constants';
import MoviesState from '../../MoviesState';
import MovieCard from '../Overview/MovieCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  input: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 18,
  },
  movies: {
    paddingHorizontal: 20,
  },
});

const Search = ({}) => {
  const [input, setInput] = useState<string>('');

  const sendRequest = () => {
    MoviesState.searchByName(input);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onFocus={() => setInput('')}
        style={styles.input}
        placeholder="What movie do you want to find?"
        placeholderTextColor="grey"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={sendRequest}
      />
      <ScrollView contentContainerStyle={styles.movies}>
        {MoviesState.searchMovies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Search);
