import { useEffect, useState } from "react";

interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function Fetch() {
  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <h3>Fetch</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
