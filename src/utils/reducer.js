export const reducer = (state, action) => {
  if (action.type === "ADD_MOVIE_TO_WATCHLIST") {
    const newWatchList = [action.payload, ...state.watchlist];

    return { ...state, watchlist: newWatchList };
  }

  if (action.type === "REMOVE_MOVIE_FROM_WATCHLIST") {
    const updWatchList = state.watchlist.filter(
      (movie) => movie.id !== action.payload
    );

    return { ...state, watchlist: updWatchList };
  }

  if (action.type === "ADD_MOVIE_TO_WATCHED") {
    const updWatchList = state.watchlist.filter(
      (movie) => movie.id !== action.payload.id
    );

    const updWatched = [action.payload, ...state.watched];

    return { ...state, watchlist: updWatchList, watched: updWatched };
  }

  if (action.type === "MOVE_TO_WATCHLIST") {
    const updWatched = state.watched.filter(
      (movie) => movie.id !== action.payload.id
    );

    const updWatchList = [action.payload, ...state.watchlist];

    return { ...state, watchlist: updWatchList, watched: updWatched };
  }

  if (action.type === "REMOVE_FROM_WATCHED") {
    const newWatched = state.watched.filter(
      (movie) => movie.id !== action.payload
    );

    return { ...state, watched: newWatched };
  }

  throw new Error("No matching action type");
};
