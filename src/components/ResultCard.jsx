import { useGlobalContext } from "../utils/context";
import Button from "./Button";

const ResultCard = ({ movie }) => {
  const { watched, watchlist, addMovieToWatched, addMovieToWatchList } =
    useGlobalContext();

  const storedMovie = watchlist.find((item) => item.id === movie.id);
  const storedMovieWatched = watched.find((item) => item.id === movie.id);

  // const watchlistDisabled = storedMovie ? true : false;
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <Button
            text="Add to WatchList"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchList(movie)}
          />
          &nbsp; &nbsp;
          <Button
            text="Add to Watched"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
