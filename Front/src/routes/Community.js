import PostList from '../components/PostList';
import { Outlet } from 'react-router-dom';

function Community() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export async function loader() {
  try {
  const response = await fetch('http://localhost:8080/community');
  // console.log(response);
  const resData = await response.json();
  // console.log(resData);
  return resData;
  }catch(err) {
    console.log(err);
    return null;
  }
}

export default Community;