import { Suspense } from "react";
import { axiosInstance } from "./api/axios";
import Posts from "./components/Posts";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Error";

async function fetchPost() {
  const { data } = await axiosInstance.get("/post2s");
  return data; // promise 객체
}

export default function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<p>Loading...</p>}>
          <Posts promise={fetchPost()} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
