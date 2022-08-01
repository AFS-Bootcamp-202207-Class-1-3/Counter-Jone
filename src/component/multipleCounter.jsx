import { useState } from "react";

import CounterSizeGenerator from "./CounterSizeGenerator"
import CounterGroup from "./CounterGroup"


function MultipleCounter() {
    const [counterSize, setCounterSize] = useState(0);

    const updateCounterSize = (size) => {
        setCounterSize(size);
    }
    return (
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}/>
            <CounterGroup counterSize={counterSize}/>
        </div>
    )
}

export default MultipleCounter