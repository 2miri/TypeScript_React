import Greeting from "./components/Greeting";

export default function App() {
  const isLoggedIn = false;
  return (
    <>
      <Greeting isLoggedIn={isLoggedIn}></Greeting>
    </>
  );
}
