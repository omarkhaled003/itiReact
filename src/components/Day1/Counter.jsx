import React, { useState } from "react";
import CounterOption from "./CounterOption.jsx";
import ShowNumber from "./ShowNumber.jsx";

export default function Counter() {
  const [favNum, setFavNum] = useState(0);

  const handleIncrease = () => {
    setFavNum((prev) => prev + 1);
  };

  const handleDecrease = (decreaseNum) => {
    setFavNum((prev) => prev - decreaseNum);
  };

  return (
    <div className="fade-in">
      {/* Header Section */}
      <div className="card text-center mb-8">
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔢</div>
        <h1 className="heading-1">React Counter</h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Learn React state management with this interactive counter component.
          Explore how state updates trigger re-renders and component lifecycle.
        </p>
      </div>

      {/* Counter Display */}
      <div
        className="card text-center mb-8"
        style={{
          background: "var(--gradient-primary)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            width: "80px",
            height: "80px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "100px",
            height: "100px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "50%",
          }}
        ></div>

        <h2
          className="heading-2"
          style={{ color: "white", marginBottom: "1rem" }}
        >
          Current Count
        </h2>
        <ShowNumber favNum={favNum} />
      </div>

      {/* Counter Controls */}
      <div className="card">
        <h3 className="heading-3 text-center mb-6">Counter Controls</h3>
        <CounterOption
          handleRestToZero={setFavNum}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      </div>

      {/* Learning Tips */}
      <div className="card mt-8">
        <h3 className="heading-3 text-center mb-6">Learning Concepts</h3>
        <div className="grid grid-cols-2 gap-6">
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⚛️</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              useState Hook
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Learn how to manage component state with React's useState hook
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔄</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              State Updates
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Understand how state changes trigger component re-renders
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📤</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              Props Passing
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Pass state and functions as props to child components
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎯</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              Event Handling
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Handle user interactions and update state accordingly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
