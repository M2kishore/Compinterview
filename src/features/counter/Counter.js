import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectName,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const personName = useSelector(selectName);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("1");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={("card", styles.score)}>
      <div className="card-body bg-primary">
        <div className="card-title">
          <h1>{personName}</h1>
        </div>
        <div className={styles.row}>
          <button
            className="btn btn-primary"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            <h1>-</h1>
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className="btn btn-primary"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            <h1>+</h1>
          </button>
        </div>
        <div className={styles.row}>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </button>
        </div>
      </div>
    </div>
  );
}
