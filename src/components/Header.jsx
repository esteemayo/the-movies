import { Link } from "react-router-dom";
import { FiFilm } from "react-icons/fi";

import links from "./../services/headerService";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              <FiFilm style={{ color: "#21d07a", fontSize: "2rem" }} />
            </Link>
          </div>

          <ul className="nav-links">
            {links.map((link) => {
              const { id, url, text, icon, className } = link;
              return (
                <li key={id} className={className ? className : null}>
                  <Link to={url}>
                    {icon} {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
