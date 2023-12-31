import React from "react";
import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post(props) {
  let img_src = `http://localhost:8080/uploads/${props.img_src}`;
  return (
    <li className={classes.post}>
      <Link to={props.id}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.text}>{props.author}</p>
        <p className={classes.text}>{props.price}</p>
        <p className={classes.text}>{props.description}</p>
        <p>
          <img className={classes.image} src={img_src} alt="instrument"></img>
        </p>
      </Link>
    </li>
  );
}

export default Post;
