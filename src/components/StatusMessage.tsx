export default function StatusMessage({ status }: { status: string }) {
  // loading, success, error, default
  switch (status) {
    case "loading":
      return <h1>loading..</h1>;
    case "success":
      return <h1>success</h1>;
    case "error":
      return <h1>error</h1>;
    default:
      return <h1>unkown status</h1>;
  }
}
