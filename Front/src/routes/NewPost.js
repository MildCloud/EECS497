import React from "react";
import classes from "./NewPost.module.css";
import Model from "../components/Model";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  return (
    <Model>
      <Form
        method="post"
        className={classes.form}
        encType="multipart/form-data"
      >
        <p>
          <label htmlFor="name">Instrument Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" required />
        </p>
        <p>
          <label htmlFor="body">Description</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="Instrument Image">Instrument Image</label>
          <input type="file" id="instrumentImage" name="instrumentImage" />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Model>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  for (let [key, value] of formData) {
    console.log(`${key}: ${value}`);
  }
  console.log(postData);
  await fetch("http://localhost:8080/submit_post", {
    method: "POST",
    body: formData,
    //headers: {
    //"Content-Type": "application/json",
    //},
  });
  return redirect("/");
}
