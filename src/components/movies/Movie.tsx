import { Suspense, useMemo } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieAxios } from "../../api/axios";
import MovieLoader from "./MovieLoader";
import { ErrorBoundary } from "react-error-boundary";
import MovieError from "./MovieError";
import { useMovieStore } from "../../store/movieStore";

async function fetchCategory(endpoint: string, page: number) {
  // await new Promise((resolve) =>
  //   setTimeout(
  //     resolve,
  //     [1000, 2000, 3000, 4000, 5000][Math.floor(Math.random() * 5)]
  //   )
  // );
  const { data } = await movieAxios.get(`${endpoint}?page=${page}`);
  return data; // Promise 객체
}

export default function Movie() {
  const page = useMovieStore((state) => state.page);
  const fetchCategoryMemo = useMemo(
    () => fetchCategory("now_playing", page),
    [page]
  );
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <ErrorBoundary fallback={<MovieError title="Now Playing" />}>
        <Suspense fallback={<MovieLoader title="Now Playing" />}>
          <MovieList title="Now Playing" promise={fetchCategoryMemo} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
