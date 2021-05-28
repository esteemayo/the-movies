import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";

import WatchList from "./components/WatchList";
import NotFound from "./components/NotFound";
import Watched from "./components/Watched";
import Header from "./components/Header";
import Add from "./components/Add";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3/search";

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={WatchList} />
        <Route path="/watched" component={Watched} />
        <Route path="/add" component={Add} />
        <Redirect from="/watchlist" to="/" />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
