import { useEffect, useState } from "react";

export default function Loading() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 500);
    return () => clearInterval(timer);
  }, []);
  return <>{isShow && <h1>Loading...</h1>}</>;
}
