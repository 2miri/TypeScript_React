import GuestView from "./components/GuestView";
import UserView from "./components/UserView";

export default function App() {
  const isLogin = true;
  const components = isLogin ? <UserView /> : <GuestView />;
  return (
    <>
      {/* <h1>{isLogin ? "Welcome" : "pls sign up"}</h1> */}
      {/* {isLogin ? <UserView /> : <GuestView />} */}
      {components}
    </>
  );
}
