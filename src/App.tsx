import axios from "axios";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface Posts {
  id: number;
  isLike: boolean;
}

export default function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateLike = async (id: number, isLike: boolean) => {
    const { data } = await axios.patch(`http://localhost:3000/posts/${id}`, {
      isLike: !isLike,
    });
    setPosts((posts) =>
      posts.map((post) => (post.id === data.id ? data : post))
    );
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("http://localhost:3000/posts");
        setPosts(data);
        setIsLoading(false);
      } catch (e) {
        console.error("에러 발생 : ", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {/* fill: 'none', stroke: 'currentColor' */}
      {/* fill: 'rgb(255,0,0)', stroke: 'rgb(255,0,0)' */}
      {posts.map((post) => (
        <Heart
          key={post.id}
          fill={post.isLike ? "rgb(255, 0, 0)" : "none"}
          stroke={post.isLike ? "rgb(255, 0, 0)" : "currentColor"}
          onClick={() => updateLike(post.id, post.isLike)}
        />
      ))}
    </>
  );
}
