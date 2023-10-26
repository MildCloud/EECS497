import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export async function loader() {
  try {
  console.log("here");
  const response = await fetch('http://localhost:8080/posts');
  console.log(response);
  const resData = await response.json();
  console.log(resData);
  return resData;
  }catch(err) {
    console.log(err);
    return null;
  }
}

export default Posts;
