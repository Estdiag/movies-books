import axios from 'axios';
import { ENV } from '../config/env';

const api = axios.create({
  baseURL: ENV.TMDB_BASE_URL,
  params: {
    api_key: ENV.TMDB_API_KEY,
    language: 'es-ES',
  },
});

export const tmdbService = {
  getPopularMovies: async () => {   
    const res = await api.get('/movie/popular');
    return res.data.results;
  },

  getMoviesByFilters: async (filters: {
    genreId?: number;
    minRating?: number;
    maxRating?: number;
  }) => {
    const params: any = {
      sort_by: 'popularity.desc',
      with_genres: filters.genreId,
      'vote_average.gte': filters.minRating,
      'vote_average.lte': filters.maxRating,
    };

    const res = await api.get('/discover/movie', { params });
    return res.data.results;
  },

  getGenres: async () => {
    const res = await api.get('/genre/movie/list');
    return res.data.genres;
  },
};
