import { useState } from "react";
import "../static/Counter.css";

function Counter(props) {
  const { updateSum } = props;
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
    updateSum(1);
  };

  const decrease = () => {
    setCount(count - 1);
    updateSum(-1);
  };
  return (
    <div className="counter">
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;
