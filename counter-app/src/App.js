import React, { useState } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

const App = () => {
  const [counters, setCounters] = useState(
    [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  )

  const handleIncrement = counter => {
    const changedCounters = [...counters];
    const index = changedCounters.indexOf(counter)
    changedCounters[index] = { ...counter }
    changedCounters[index].value++
    setCounters(changedCounters)
  };

  const handleReduction = counter => {
    const changedCounters = [...counters];
    const index = changedCounters.indexOf(counter)
    changedCounters[index] = { ...counter }
    changedCounters[index].value--
    setCounters(changedCounters)
  };

  const handleReset = () => {
    const changedCounters = counters.map(c => {
      c.value = 0;
      return c;
    });
    setCounters(changedCounters)
  };

  const handleDelete = counterId => {
    setCounters(counters.filter(c => c.id !== counterId))
  };

  const handleAddCounter = () => {
    const changedCounters = counters;
    let index = counters.length

    while (counters.find(c => c.id === index))
      index = index + 1;
      
    const counterObject = {
      id: index,
      value: 0
    }

    setCounters(changedCounters.concat(counterObject))
  }

    return (
      <React.Fragment>
        <NavBar
          totalCounters={counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <h1>Counter</h1>
          <Counters
            counters={counters}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onReduction={handleReduction}
            onDelete={handleDelete}
            handleAddCounter={handleAddCounter}
          />
        </main>
      </React.Fragment>
    );
}

export default App;
