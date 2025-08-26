import { Suspense } from "react";
import { axiosInstance } from "./api/axios";
import Posts from "./components/Posts";

async function fetchPost() {
  const { data } = await axiosInstance.get("/posts");
  return data; // promise 객체
}

export default function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Posts promise={fetchPost()} />
      </Suspense>
    </>
  );
}
