import { useState } from "react";

export default function Counter(props) {
  const [counterVal, setCounterVal] = useState(0);

  const increment = () => {
    setCounterVal(counterVal + 1);
  };
  return <div>{props.render(counterVal, increment)}</div>;
}
