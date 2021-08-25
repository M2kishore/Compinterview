import React from "react";
//import { Counter } from "./features/counter/Counter";
import CounterList from "./features/counter/CounterList";
import LeaderBoard from "./features/LeaderBoard/LeaderBoard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <CounterList />
          </div>
          <div className="col-md-4 col-small-12">
            <LeaderBoard />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
