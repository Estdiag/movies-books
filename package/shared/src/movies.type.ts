export type Movie = {
    id: string,
    title: string,
    original_title: string,
    release_date: string,
    poster_path: string,
    overview: string,
    vote_average: number,
    genres: string[],
    genre_ids: number[],
    poster_path_200?: string,
    poster_path_500?: string,
};

