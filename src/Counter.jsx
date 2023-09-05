import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronsUp, ChevronsDown, Hash, RotateCcw } from "react-feather";

function Counter() {
  const [count, setCount] = useState(0);

  function randomCount () {
    // Set count between 1 and 100
    setCount(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="counterContainer">
      <div className="counter">
        <p>Counter value</p>
        <p className="count">{count}</p>
      </div>
      <div className="counterButtons">
        <ChevronUp onClick={() => setCount(count => count += 1)} />
        <ChevronsUp onClick={() => setCount(count => count += 10)} />
        <RotateCcw onClick={() => setCount(0)} />
        <Hash onClick={randomCount} />
        <ChevronsDown onClick={() => setCount(count => count -= 10)} />
        <ChevronDown onClick={() => setCount(count => count -= 1)} />
      </div>
    </div>
  )
}

export default Counter;