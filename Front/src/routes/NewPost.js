import React from 'react';
import classes from './NewPost.module.css';
import Model from '../components/Model';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {
  return (
    <Model>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="name">Instrument Name</label>
          <input type="text" id="name" name='author' required/>
        </p>
        <p>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name='price' required/>
        </p>
        <p>
          <label htmlFor="body">Description</label>
          <textarea id="body" name='body' required rows={3}/>
        </p>
        <p>
          <label htmlFor="body">Instrument Image</label>
          <input type="file"/>
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button" >Cancel</Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Model>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('/');
}
