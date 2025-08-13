import React, { useState } from "react";
import ChildB from "./ChildB";

export default React.memo(function ChildA() {
  console.log("childA");
  return (
    <>
      <h1>ChildA Component</h1>
      <ChildB />
    </>
  );
});
