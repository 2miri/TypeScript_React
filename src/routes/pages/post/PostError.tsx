import { isRouteErrorResponse, useRouteError } from "react-router";

export default function PostError() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h1>{error.data.message}</h1>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>알 수 없는 에러</h1>
        <h1>{error.message}</h1>
      </div>
    );
  }
  return (
    <>
      <h1>에러 발생!</h1>
    </>
  );
}
