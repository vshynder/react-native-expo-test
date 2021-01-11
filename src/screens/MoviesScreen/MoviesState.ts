import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import { API_KEY, MOVIES_AS_KEY } from './constants';

export type Movie = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  genres: string;
};

export type Genre = {
  id: number;
  name: string;
};

interface MoviesType {
  movies: Movie[];
}

class Movies {
  constructor() {
    makeAutoObservable(this);
  }

  movies: Movie[] = [];
  genres: Genre[] = [];
  favouriteMovies: Movie[] = [];

  fetchMovies = async () => {
    await this.getGenres();
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    axios
      .get(url)
      .then(({ data }) => {
        runInAction(() => {
          const movies = [...data.results];
          const nMovies = movies.map((movie) => {
            const movieGenres = this.findGenres(movie);
            return {
              ...movie,
              genres: movieGenres.join(', '),
            };
          });
          this.movies = [...nMovies];
        });
      })
      .catch((error) => console.log('fetch error', error));
  };

  getGenres = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    axios
      .get(url)
      .then((d) => {
        runInAction(() => {
          this.genres = d.data.genres;
        });
      })
      .catch((error) => console.log('fetch error', error));
  };

  findGenres = (movie: Movie) => {
    return this.genres
      .filter((genre) => movie.genre_ids.includes(genre.id))
      .map((el) => el.name);
  };

  getSaved = async () => {
    try {
      const movies = await AsyncStorage.getItem(MOVIES_AS_KEY);
      if (movies) {
        this.favouriteMovies = JSON.parse(movies);
      }
    } catch (error) {
      console.log('get favourite movies error', error);
    }
  };

  saveFavMovie = async (movie: Movie) => {
    try {
      const movies = await AsyncStorage.getItem(MOVIES_AS_KEY);
      if (movies) {
        const parsed: Movie[] = JSON.parse(movies);
        const match = parsed.find((m) => m.id === movie.id);
        runInAction(() => {
          if (match) {
            this.favouriteMovies = parsed.filter((m) => m.id !== movie.id);
          } else {
            this.favouriteMovies = [...parsed, movie];
          }
          AsyncStorage.setItem(
            MOVIES_AS_KEY,
            JSON.stringify(this.favouriteMovies)
          );
        });
      } else {
        AsyncStorage.setItem(MOVIES_AS_KEY, JSON.stringify([movie]));
      }
    } catch (error) {
      console.log('set favourite movies error', error);
    }
  };
}

export default new Movies();
