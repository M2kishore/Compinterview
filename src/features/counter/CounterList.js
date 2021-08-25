import React from "react";
import { Counter } from "./Counter";
export default function CounterList() {
  return (
    <div className="row">
      <div className="col-lg-6 col-sm-12">
        <Counter />
      </div>
      <div className="col-lg-6 col-sm-12">
        <Counter />
      </div>
      <div className="col-lg-6 col-sm-12">
        <Counter />
      </div>
    </div>
  );
}
