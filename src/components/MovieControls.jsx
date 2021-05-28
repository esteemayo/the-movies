import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

import { useGlobalContext } from "../utils/context";
import Button from "./Button";

const MovieControls = ({ movie, type }) => {
  const {
    moveToWatchlist,
    addMovieToWatched,
    handleRemoveFromWatched,
    handleRemoveMovieFromWatchList,
  } = useGlobalContext();

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <Button icon={<FaEye />} onClick={() => addMovieToWatched(movie)} />

          <Button
            icon={<FaTimes />}
            onClick={() => handleRemoveMovieFromWatchList(movie.id)}
          />
        </>
      )}

      {type === "watched" && (
        <>
          <Button
            icon={<FaEyeSlash />}
            onClick={() => moveToWatchlist(movie)}
          />

          <Button
            icon={<FaTimes />}
            onClick={() => handleRemoveFromWatched(movie.id)}
          />
        </>
      )}
    </div>
  );
};

export default MovieControls;
