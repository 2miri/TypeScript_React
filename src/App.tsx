import sample from "./assets/images/cat.jpg";
export default function App() {
  return (
    <>
      <img src="/images/cat.jpg" alt="퍼블릭 고양이" />
      <img src="/src/assets/images/cat.jpg" alt="src 고양이" />
      <img src={sample} alt="src 고양이" />
    </>
  );
}
