import { gql } from '@apollo/client';

export const GET_POPULAR_MOVIES = gql`
  query {
    getPopularMovies {
      id
      title
      original_title
      release_date
      poster_path
      overview
      vote_average
    }
  }
`;
