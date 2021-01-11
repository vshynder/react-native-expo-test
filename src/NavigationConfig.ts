import { Movie } from './screens/MoviesScreen/MoviesState';

export type DrawerType = {
  Home: undefined;
  Movies: undefined;
};

export type BottomTabsType = {
  Search: undefined;
  Overview: undefined;
  Liked: undefined;
};

export type OverviewStackType = {
  Main: BottomTabsType;
  Detail: { movie: Movie };
};
