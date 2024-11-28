import { useQuery } from '@apollo/client';
import { GET_BLOG_POSTS } from '../graphql/queries';

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

interface BlogData {
  post: BlogPost[];
}

const Home = () => {
  const { loading, error, data } = useQuery<BlogData>(GET_BLOG_POSTS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {data?.post.map((post: BlogPost) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
