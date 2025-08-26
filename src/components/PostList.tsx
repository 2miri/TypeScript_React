import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { axiosInstance } from "../api/axios";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import { usePostStore } from "../store/postStore";

export default function PostList() {
  const [posts, setPost] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const currentPage = usePostStore((state) => state.currentPage);
  const limit = usePostStore((state) => state.limit);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError("");
      try {
        const { data } = await axiosInstance.get(
          `/posts?_page=${currentPage}&_limit=${limit}`
        );
        setPost(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [currentPage, limit]);
  return (
    <div className="mb-8">
      {/* 데이터가 없을 때 */}
      {/* <NoData /> */}
      {/* 로딩 중일 때 */}
      {/* <LoadingState /> */}
      {/* 에러가 발생했을 때 */}
      {/* <ErrorState /> */}
      {/* 데이터가 있을 때 */}
      {isLoading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            return <PostCard key={post.id} {...post} />;
          })}
        </div>
      )}
    </div>
  );
}
