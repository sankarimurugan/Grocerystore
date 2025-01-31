import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAmount,
  decrement,
  increment,
  resets,
} from "../../DataStore/Redux/slice/counterSlicetwo";

const CounterComp = () => {
  const dispatch = useDispatch();
  const countData = useSelector((state) => state?.countertwo?.counts);
  console.log(countData, "countsss");
  // const count = useSelector((state) => state.counter.count);
  const [addValue, setAddValue] = useState(0);
  const numData = Number(addValue) || 0;

  const resetBtn = () => {
    dispatch(resets());
    setAddValue(0);
  };
  return (
    <div className="countercont">
      <h1>Counter: {countData}</h1>
      <div className="countconts">
        <button className="countbtn cp" onClick={() => dispatch(increment())}>
          Increment +
        </button>
        <button className="countbtn cp" onClick={() => dispatch(decrement())}>
          decriment -
        </button>
        <button className="countbtn cp" onClick={() => resetBtn()}>
          Reset
        </button>
        <input
          type="text"
          className="countbtn"
          value={addValue}
          onChange={(e) => setAddValue(e.target.value)}
        />
        <button
          className="countbtn cp"
          onClick={() => dispatch(addAmount(numData))}>
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default CounterComp;
