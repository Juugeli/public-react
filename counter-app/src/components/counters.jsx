import React from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, onDelete, onIncrement, onReduction, handleAddCounter }) => {
  return (
    <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReduction={onReduction}
            counter={counter}
          />
        ))}
        <button onClick={handleAddCounter} className="btn btn-primary btn-sm m-2">
          Add counter
        </button>
      </div>
  )
}

export default Counters
