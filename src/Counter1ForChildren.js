import { useState } from "react";

export default function Counter1ForChildren(props) {
  const [counterVal, setCounterVal] = useState(0);

  const increment = () => {
    setCounterVal(counterVal + 1);
  };
  return <div>{props.children(counterVal, increment)}</div>;
}
