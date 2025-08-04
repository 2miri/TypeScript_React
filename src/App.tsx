import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  // 참조 자료형 예제
  const referenceArray = [1, 2, 3, 4];
  const referenceObject = { name: "John", age: 30 };
  const referenceFunction = () => "함수의 리턴 값";
  const referenceDate = new Date();
  const referenceRegExp = /react/i;
  const referenceMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  const referenceSet = new Set([1, 2, 3, 4]);

  return (
    <>
      <h2>참조 자료형 출력</h2>
      <p>배열: {referenceArray}</p>
      <p>객체: {JSON.stringify(referenceObject)}</p>
      <p>function: {referenceFunction.toString()}</p>
      <p>date: {referenceDate.toString()}</p>
      <p>regExp: {referenceRegExp.toString()}</p>
      <p>map: {JSON.stringify(Array.from(referenceMap))}</p>
      <p>set: {JSON.stringify(Array.from(referenceSet))}</p>
    </>
  );
}
