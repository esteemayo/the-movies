import { FaPlus } from "react-icons/fa";

const links = [
  {
    id: 1,
    url: "/",
    text: "WatchList",
  },
  {
    id: 2,
    url: "/watched",
    text: "Watched",
  },
  {
    id: 3,
    url: "/add",
    text: "Add",
    icon: <FaPlus className="header-icon" />,
    className: "btn",
  },
];

export default links;
