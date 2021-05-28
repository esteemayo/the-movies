import { Link } from "react-router-dom";

import image from "../img/not-found.png";

const NotFound = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <img src={image} alt="Error page avatar" />
        <h1>Oops! We can't find the page you're looking for</h1>
        <p>You tried to request a page that doesn't exist.</p>
        <Link to="/" className=" btn-primary">
          Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
