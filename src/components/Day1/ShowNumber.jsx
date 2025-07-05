import React from "react";

export default function ShowNumber({ favNum }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "4rem",
          fontWeight: "700",
          color: "white",
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          marginBottom: "0.5rem",
          fontFamily: "monospace",
        }}
      >
        {favNum}
      </div>
      <div
        style={{
          fontSize: "1.1rem",
          opacity: 0.9,
          fontWeight: "500",
        }}
      >
        {favNum === 0
          ? "Start counting!"
          : favNum > 0
          ? "Positive number"
          : favNum < 0
          ? "Negative number"
          : "Zero"}
      </div>
    </div>
  );
}
