export default function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <a
          href="https://ko.wikipedia.org/"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          위키피디아
        </a>
        <button type="submit">전송</button>
      </form>
    </>
  );
}
