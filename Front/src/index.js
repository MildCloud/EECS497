import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import Posts, { loader as postsLoader } from "./routes/Posts";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
import Categories from "./routes/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Categories />,
      },
      { path: "/create-post", element: <NewPost />, action: newPostAction },
      {
        path: "/guitar",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/guitar/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ]
      },
      {
        path: "/piano",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/piano/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ]
      },
      {
        path: "/violin",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/violin/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ]
      },
      {
        path: "/drum",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/drum/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ]
      },
      {
        path: "/saxophone",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/saxophone/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ]
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
