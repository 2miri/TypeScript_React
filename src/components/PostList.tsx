import PostCard from "./PostCard";

export default function PostList() {
  return (
    <div className="mb-8">
      {/* 데이터가 없을 때 */}
      {/* <NoData /> */}
      {/* 로딩 중일 때 */}
      {/* <LoadingState /> */}
      {/* 에러가 발생했을 때 */}
      {/* <ErrorState /> */}
      {/* 데이터가 있을 때 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard />
      </div>
    </div>
  );
}
