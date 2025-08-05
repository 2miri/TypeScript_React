import Button from "./components/ui/Button";

export default function App() {
  const handleClick = (message: string) => {
    alert(message);
  };
  return (
    <>
      <Button message="test" handleClick={handleClick}>
        button
      </Button>
      <Button message="test2" handleClick={handleClick}>
        button2
      </Button>
    </>
  );
}
