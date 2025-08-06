export default function App() {
  const fruits = ["apple", "banana", "orange"];
  return (
    <>
      <p>Fruits Lists</p>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </>
  );
}
