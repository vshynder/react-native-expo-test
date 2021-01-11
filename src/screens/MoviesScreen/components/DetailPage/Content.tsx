import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import { OverviewStackType } from '../../../../NavigationConfig';
import { Colors, MOVIES_AS_KEY } from '../../constants';
import MoviesState, { Movie } from '../../MoviesState';

const { height: wHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 34,
    color: 'white',
    textAlign: 'center',
  },
  undertitle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    paddingVertical: 2,
    paddingHorizontal: 7,
    marginVertical: 5,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    margin: 10,
  },
  year: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  ganreBox: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginVertical: 5,
    backgroundColor: Colors.secondary,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  genres: {
    height: 44,
  },
  genre: {
    color: 'white',
    fontSize: 16,
  },
  overview: {
    height: wHeight / 3,
    justifyContent: 'space-around',
  },
  overviewText: {
    color: 'white',
    fontSize: 16,
  },
});

interface ContentProps {
  movie: Movie;
}

const Content = ({ movie }: ContentProps) => {
  const navigation = useNavigation<
    StackNavigationProp<OverviewStackType, 'Detail'>
  >();

  const yearCteated = new Date(movie.release_date).getFullYear();
  const mF = MoviesState.favouriteMovies.find((m) => m.id === movie.id);
  const mId = mF ? mF.id : null;

  const handleButtonPress = () => {
    MoviesState.saveFavMovie(movie);
    navigation.pop();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.undertitle}>
        <View style={styles.box}>
          <Text style={styles.year}>{yearCteated}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.year}>{movie.vote_average}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.genres} horizontal>
        {movie.genres
          ? movie.genres.split(', ').map((genre) => (
              <View key={genre} style={styles.ganreBox}>
                <Text style={styles.genre}>{genre}</Text>
              </View>
            ))
          : null}
      </ScrollView>
      <View style={styles.overview}>
        <Text style={styles.overviewText}>{movie.overview}</Text>
        <Button
          onPress={handleButtonPress}
          title={`${mId !== movie.id ? 'Add to' : 'Remove from'} favourites`}
          color={Colors.primary}
        />
      </View>
    </View>
  );
};

export default Content;
