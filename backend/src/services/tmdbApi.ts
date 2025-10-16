import axios from 'axios';
import { ENV } from '../config/env';
import type { Movie } from '@package/shared';

const api = axios.create({
  baseURL: ENV.TMDB_BASE_URL,
  params: {
    api_key: ENV.TMDB_API_KEY,
    language: 'es-ES',    
  },
});

export const tmdbService = {
  getPopularMovies: async ({ page }: { page: number }) => {
        
    const res = await api.get(`/movie/popular?page=${page}`);
    const resGenres = await api.get('/genre/movie/list');

    return { 
      page: res.data.page,
        totalPages: 500,
        results: res.data.results.map((movie: Movie) => ({
      ...movie,
      poster_path_500: `${ENV.TMDB_IMAGE}/w500${movie.poster_path}`,
      poster_path_200: `${ENV.TMDB_IMAGE}/w200${movie.poster_path}`,
      genres: movie.genre_ids
        .map((id) => resGenres.data.genres.find((g: any) => g.id === id)?.name)
        .filter(Boolean),
    }))
    }

    // return res.data.results.map((movie: Movie) => ({
    //   ...movie,
    //   poster_path_500: `${ENV.TMDB_IMAGE}/w500${movie.poster_path}`,
    //   poster_path_200: `${ENV.TMDB_IMAGE}/w200${movie.poster_path}`,
    //   genres: movie.genre_ids
    //     .map((id) => resGenres.data.genres.find((g: any) => g.id === id)?.name)
    //     .filter(Boolean),
    // }));
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
