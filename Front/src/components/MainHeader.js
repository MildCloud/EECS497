import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage } from "react-icons/md";
import { FaMusic } from "react-icons/fa"

import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link to="/" className={classes.button}>
        <FaMusic />
        UMst
        </Link>
      </h1>
      <p>
        <Link to="/guitar" className={classes.button}>
          Community
        </Link>
      </p>
      <p>
        <Link to="/guitar" className={classes.button}>
          Groups
        </Link>
      </p>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
