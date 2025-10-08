import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    original_title: String!
    release_date: String
    overview: String
    poster_path: String
    vote_average: Float
    genre_ids: [Int]
  }

  type Genre {
    id: ID!
    name: String!
  }

  type Query {
    popularMovies: [Movie!]!
    genres: [Genre!]!
    moviesByFilter(
      genreId: Int
      minRating: Float
      maxRating: Float
    ): [Movie!]!
  }
`;
