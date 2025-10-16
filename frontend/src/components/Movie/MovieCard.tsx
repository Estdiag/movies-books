import type { Movie } from '@package/shared';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <article         
      className="group cursor-pointer bg-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      tabIndex={0}
      aria-label={`${movie.title} - ${movie.release_date ?? ''}`}
    >
      {/* Poster */}
      <div className="relative h-0 pb-[150%] bg-gray-800 flex items-center justify-center">
        {movie.poster_path_200 ? (
          <img
            src={movie.poster_path_200}
            alt={`${movie.title} poster`}
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
            No image
          </div>
        )}

        {/* Rating badge */}
        {typeof movie.vote_average === 'number' && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-black/60 text-white text-sm font-medium px-2 py-1 rounded-md">
            <span className="material-symbols-rounded">star</span>
            <span>{movie.vote_average.toFixed(1)}</span>
          </span>
        )}

        {/* subtle hover overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-hidden
        />
      </div>

      {/* Card body */}
      <div className="p-3">
        <h3 className="text-sm font-semibold leading-tight line-clamp-2">
          {`${movie.title} ${`(${movie.original_title})`} `}
        </h3>

        <div className="mt-2 text-xs text-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {movie.genres && movie.genres.length > 0 ? (
              <span className="inline-block text-[11px] px-2 py-0.5 bg-gray-200 rounded-full">
                {movie.genres.slice(0, 3).join(', ')}
              </span>
            ) : (
              <span className="text-[11px]">—</span>
            )}
          </div>

          <time
            dateTime={movie.release_date}
            className="text-[11px] text-gray-500"
          >
            {movie.release_date
              ? new Date(movie.release_date).getFullYear()
              : ''}
          </time>
        </div>

        {movie.overview && (
          <p className="mt-3 text-xs text-gray-500 line-clamp-3" title={movie.overview}>
            {movie.overview}
          </p>
        )}
      </div>
    </article>
  );
}
