import {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";

import { getMovies } from "./../services/movieService";
import { reducer } from "./reducer";

const getWatchListLocalStorage = () => {
  const watchlist = localStorage.getItem("watchlist");
  if (watchlist) return JSON.parse(watchlist);
  return [];
};

const getWatchedLocalStorage = () => {
  const watched = localStorage.getItem("watched");
  if (watched) return JSON.parse(watched);
  return [];
};

const initialStates = {
  watchlist: getWatchListLocalStorage(),
  watched: getWatchedLocalStorage(),
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialStates);

  const fetchMovies = useCallback(async () => {
    try {
      const { data } = await getMovies(searchValue);
      setResults(data.results);
      setLoading(false);
    } catch (err) {
      setResults([]);
      //   console.error(err);
    }
  }, [searchValue]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const handleRemoveMovieFromWatchList = (movieId) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: movieId });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const handleRemoveFromWatched = (movieId) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: movieId });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        results,
        loading,
        searchValue,
        setSearchValue,
        moveToWatchlist,
        addMovieToWatched,
        addMovieToWatchList,
        handleRemoveFromWatched,
        handleRemoveMovieFromWatchList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
