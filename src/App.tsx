import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  // 기본 자료형
  const primitiveString = "Hello, World ! ";
  const primitiveNumber = 42;
  const primitiveBoolean = false;
  const primitiveUndefinde = undefined;
  const primitiveNull = null;
  const primitiveSymbol = Symbol("mySymbol");
  const primitiveBigInt = 9007199254740991n;

  return (
    <>
      <h2>기본 자료형 출력</h2>
      <p>문자열: {primitiveString}</p>
      <p>숫자: {primitiveNumber}</p>
      <p>논리형: {primitiveBoolean.toString()}</p>
      <p>undefined: {String(primitiveUndefinde)}</p>
      <p>null: {String(primitiveNull)}</p>
      <p>symbol: {String(primitiveSymbol)}</p>
      <p>BigInt: {primitiveBigInt}</p>
    </>
  );
}
