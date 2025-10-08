import { tmdbService } from '../services/tmdbApi';

export const resolversMovies = {
  Query: {
    popularMovies: async () => {
      return await tmdbService.getPopularMovies();
    },
    genres: async () => {
      return await tmdbService.getGenres();
    },
    moviesByFilter: async (
      _: any,
      args: { genreId?: number; minRating?: number; maxRating?: number }
    ) => {
      return await tmdbService.getMoviesByFilters(args);
    },
  },
};
