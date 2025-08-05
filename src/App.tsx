import Button from "./components/ui/Button";

export default function App() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(message);
    console.log(event);
    // 방법1
    event.currentTarget.innerText = message;
    // 방법2 - 비추
    // (event.target as HTMLButtonElement).innerText = message;
  };
  return (
    <>
      <Button handleClick={handleClick} />
    </>
  );
}
