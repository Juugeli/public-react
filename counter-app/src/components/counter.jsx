import React from "react";

const Counter = ({ onDelete, onIncrement, onReduction, counter }) => {

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
  
  return (
    <div>
        <span className={getBadgeClasses()}>{formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onReduction(counter)}
          className="btn btn-secondary btn-sm"
        >
          Reduction
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>

  )
}



export default Counter;
