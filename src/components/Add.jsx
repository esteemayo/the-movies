import { useGlobalContext } from "../utils/context";
import ResultCard from "./ResultCard";
import Loader from "./Loader";

const Add = () => {
  const { results, loading, searchValue, setSearchValue } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <div className="add-page">
          <div className="container">
            <div className="add-content">
              <div className="input-wrapper">
                <input
                  type="search"
                  placeholder="Search for a movie"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <Loader />
      </main>
    );
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="search"
              placeholder="Search for a movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          {results && (
            <ul className="results">
              {results.map((movie) => {
                return (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
