import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    original_title: String!
    release_date: String
    overview: String
    poster_path_200: String
    poster_path_500: String
    vote_average: Float
    genres: [String!]!
  }

  type Genre {
    id: ID!
    name: String!
  }

  type MoviesResponse {
    page: Int!
    totalPages: Int!
    results: [Movie!]!
  }

  type Query {
    getPopularMovies(page: Int): MoviesResponse!
    genres: [Genre!]!
    moviesByFilter(
      genreId: Int
      minRating: Float
      maxRating: Float
    ): [Movie!]!
  }
`;
