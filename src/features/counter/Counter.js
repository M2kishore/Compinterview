import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="container">
      <div className="row">
        <div className="card col-6">
          <div className="card-body">
            <button
              className="btn btn-primary"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
            <span className={styles.value}>{count}</span>
            <button
              className="btn btn-primary"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
          <div className={styles.row}>
            <input
              className={styles.textbox}
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />
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
    </div>
  );
}
