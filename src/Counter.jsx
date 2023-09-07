import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronsUp, ChevronsDown, Hash, RotateCcw } from "react-feather";

function Counter() {
  const [count, setCount] = useState(0);
  const [countText, setCountText] = useState(null);

  function randomCount () {
    // Set count between 1 and 100
    setCount(Math.floor(Math.random() * 100) + 1);
    setCountText("random value");
  }

  function addOne() {
    setCount(count => count += 1);
    setCountText("increment by one");
  }
  function addTen() {
    setCount(count => count += 10);
    setCountText("increment by ten");
  }
  function reset() {
    setCount(0);
    setCountText("count reset");
  }

  function reduceOne() {
    setCount(count => count -= 1);
    setCountText("reduced by one");
  }

  function reduceTen() {
    setCount(count => count -= 10);
    setCountText("reduced by ten");
  }

  return (
    <div className="container">
      <div className="counterContainer">
        <div className="counter">
          <p>Counter value: {countText ? countText : ""}</p>
          <p className="count">{count}</p>
        </div>
        <div className="counterButtons">
          <ChevronUp onClick={addOne} />
          <ChevronsUp onClick={addTen} />
          <RotateCcw onClick={reset} />
          <Hash onClick={randomCount} />
          <ChevronsDown onClick={reduceTen} />
          <ChevronDown onClick={reduceOne} />
        </div>
      </div>
    </div>
  )
}

export default Counter;