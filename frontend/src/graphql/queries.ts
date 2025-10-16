import { gql } from '@apollo/client';

export const GET_POPULAR_MOVIES = gql`
  query GetPopularMovies($page: Int!) {
    getPopularMovies(page: $page) {
      page
      totalPages
      results {
        id
        title
        original_title
        release_date
        poster_path_200
        overview
        vote_average
        genres
      }
    }
  }
`;
