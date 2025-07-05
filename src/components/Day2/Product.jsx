import React from "react";

export default function Product({ products }) {
  return (
    <div>
      {products.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            color: "var(--text-secondary)",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📦</div>
          <h3 style={{ marginBottom: "0.5rem" }}>No Products Yet</h3>
          <p>Add some products using the calculator above!</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="card"
              style={{
                textAlign: "center",
                padding: "1.5rem",
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                  opacity: 0.8,
                }}
              >
                📦
              </div>
              <h4
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "600",
                  color: "var(--text-primary)",
                }}
              >
                {product}
              </h4>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  background: "rgba(102, 126, 234, 0.1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "12px",
                  display: "inline-block",
                }}
              >
                ID: {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
