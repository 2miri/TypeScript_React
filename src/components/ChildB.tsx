import React from "react";
import ChildC from "./ChildC";

export default function ChildB() {
  console.log("childB");

  return (
    <>
      <h1>ChildB Component</h1>
      <ChildC />
    </>
  );
}
