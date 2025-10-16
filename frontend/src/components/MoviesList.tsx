 
import { useQuery } from '@apollo/client/react';
import { useSearchParams } from 'react-router';
import { GET_POPULAR_MOVIES } from '../graphql/queries';
import type { Movie } from '@package/shared';
import MovieCard from './Movie/MovieCard';
import { Pagination } from './Pagination/Pagination';
import { useCallback } from 'react';

export function MoviesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const { loading, error, data } = useQuery(GET_POPULAR_MOVIES, {
    variables: { page },
  });

  const routeChanger = useCallback(
    (newPage: number) => {
      setSearchParams({ page: newPage.toString() });
    },
    [setSearchParams]
  );
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-4">
        {(
          data as { getPopularMovies: { results: Movie[] } }
        ).getPopularMovies.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        totalPages={
          (data as { getPopularMovies: { totalPages: number } })
            .getPopularMovies.totalPages
        }
        initialPage={page}
        onPageChange={routeChanger}
      />
    </div>
  );
}
