import React from "react";

export default function CounterOption({
  handleRestToZero,
  handleDecrease,
  handleIncrease,
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => handleIncrease()}
        className="btn btn-success"
        style={{ fontSize: "1.1rem" }}
      >
        <span style={{ marginRight: "0.5rem" }}>➕</span>
        Increase
      </button>

      <button
        onClick={() => handleDecrease(1)}
        className="btn btn-secondary"
        style={{ fontSize: "1.1rem" }}
      >
        <span style={{ marginRight: "0.5rem" }}>➖</span>
        Decrease
      </button>

      <button
        onClick={() => handleRestToZero(0)}
        className="btn btn-primary"
        style={{ fontSize: "1.1rem" }}
      >
        <span style={{ marginRight: "0.5rem" }}>🔄</span>
        Reset
      </button>
    </div>
  );
}
