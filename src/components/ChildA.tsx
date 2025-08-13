import ChildB from "./ChildB";

export default function ChildA() {
  console.log("childA");

  return (
    <>
      <h1>ChildA Component</h1>
      <ChildB />
    </>
  );
}
