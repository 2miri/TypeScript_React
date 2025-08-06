export default function TrafficLight({
  light,
  handleLight,
}: {
  light: string;
  handleLight: () => void;
}) {
  return (
    <>
      <h1>{light.toUpperCase()}</h1>
      <button onClick={handleLight}>신호등 변경</button>
    </>
  );
}
