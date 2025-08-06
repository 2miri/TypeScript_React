import StatusMessage from "./components/StatusMessage";

export default function App() {
  const status = "loading";
  return (
    <>
      <StatusMessage status={status} />
    </>
  );
}
