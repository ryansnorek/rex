import { useEffect } from "react";
import { findUserContentById } from "../actions";

export default function useLoadContent(content, dispatch, contentList) {
  const { movies, tvShows } = contentList;

  const loadUserContent = (contentIds, dispatch) => {

    if (contentIds.movies !== []) {
      contentIds.movies.forEach((movie) => {
        dispatch(findUserContentById(movie.movie_id, "movie"));
      });
    }
    if (contentIds.tvShows !== []) {
      contentIds.tvShows.forEach((tvShow) => {
        dispatch(findUserContentById(tvShow.tv_show_id, "tv"));
      });
    }
  };
  useEffect(() => {
    if (movies.length === 0 && tvShows.length === 0) {
      loadUserContent(content, dispatch);
    }
  }, [content]);

  return [movies, tvShows];
}
