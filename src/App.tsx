import Button from "./components/ui/Button";

export default function App() {
  const handleClick = (message: string) => alert(message);
  return (
    <>
      <Button handleClick={handleClick} message="playing">
        Play Movie
      </Button>
      <Button handleClick={handleClick} message="uploading">
        Upload Image
      </Button>
    </>
  );
}
