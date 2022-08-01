import { useState } from "react";

import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";

function MultipleCounter() {
  const [counterSize, setCounterSize] = useState(0);
  const [sum, setSum] = useState(0);

  const updateCounterSize = (size) => {
    setCounterSize(size);
  };

  const updateSum = (changedValue) => {
    setSum(sum + changedValue);
  };

  return (
    <div>
      <CounterSizeGenerator updateCounterSize={updateCounterSize} />
      <CounterGroupSum sum={sum} />
      <CounterGroup counterSize={counterSize} updateSum={updateSum} />
    </div>
  );
}

export default MultipleCounter;
