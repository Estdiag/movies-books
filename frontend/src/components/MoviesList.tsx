import { useQuery } from "@apollo/client/react";
import { GET_POPULAR_MOVIES } from "../graphql/queries";
import  Movie  from "@package/shared";

export function MoviesList() {
  const { loading, error, data } = useQuery(GET_POPULAR_MOVIES);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;


   

  return (
    <div className="movies-grid">
      
      {(data as {getPopularMovies: Movie[]}).getPopularMovies.map((movie: Movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.posterPath} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>⭐ {movie.rating}</p>
        </div>
      ))}
      
    </div>
  );
}
 