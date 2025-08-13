import React, { useState } from "react";
import ChildB from "./ChildB";

export default React.memo(function ChildA({ count }: { count: number }) {
  console.log("childA");
  return (
    <>
      <h1>ChildA Component count : {count}</h1>
      <ChildB />
    </>
  );
});
