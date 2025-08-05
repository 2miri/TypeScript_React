export default function Button({
  handleClick,
}: {
  handleClick: (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}) {
  return (
    <>
      <button onClick={(event) => handleClick("hello", event)}>클릭</button>
    </>
  );
}
