/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function useUpdate(initial) {
  const [count, setCount] = useState(initial);
  const handleUpdate = (isInc) => {
    isInc === "reset" ? setCount(0) : isInc ? setCount(count + 1) : setCount(count - 1);
  };
  return { count, handleUpdate };
}
