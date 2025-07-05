import { useEffect, useState } from "react";
import React from "react";
import Form from "./Form";
import Product from "./Product";

export default function Day2() {
  const [products, setProducts] = useState([
    "Product 1",
    "Product 2",
    "Product 3",
  ]);
  const [formData, setFormData] = useState({ add: 0, delete: 0 });

  const handleAddChange = (e) => {
    setFormData((prev) => ({ ...prev, add: parseInt(e.target.value) || 0 }));
  };

  const handleDeleteChange = (e) => {
    setFormData((prev) => ({ ...prev, delete: parseInt(e.target.value) || 0 }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newProducts = [...products];

    for (let i = 0; i < formData.add; i++) {
      newProducts.push(`Product ${newProducts.length + 1}`);
    }

    if (formData.delete > 0 && formData.delete <= newProducts.length) {
      newProducts = newProducts.slice(0, newProducts.length - formData.delete);
    }

    setProducts(newProducts);
    setFormData({ add: 0, delete: 0 });
  };

  return (
    <div className="fade-in">
      {/* Header Section */}
      <div className="card text-center mb-8">
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🧮</div>
        <h1 className="heading-1">Product Calculator</h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Learn React state management and form handling with this interactive
          product calculator. Add and remove products dynamically while
          exploring component composition.
        </p>
      </div>

      {/* Calculator Interface */}
      <div className="grid grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="card">
          <h3 className="heading-3 text-center mb-6">Calculator Controls</h3>
          <Form
            add={formData.add}
            deleteNum={formData.delete}
            handleAddChange={handleAddChange}
            handleDeleteChange={handleDeleteChange}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* Stats Section */}
        <div className="card">
          <h3 className="heading-3 text-center mb-6">Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  background: "var(--gradient-success)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {products.length}
              </div>
              <div
                style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
              >
                Total Products
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  background: "var(--gradient-secondary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {formData.add}
              </div>
              <div
                style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
              >
                To Add
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Display */}
      <div className="card mt-8">
        <h3 className="heading-3 text-center mb-6">Product List</h3>
        <Product products={products} />
      </div>

      {/* Learning Concepts */}
      <div className="card mt-8">
        <h3 className="heading-3 text-center mb-6">Learning Concepts</h3>
        <div className="grid grid-cols-2 gap-6">
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📝</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              Form Handling
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Learn to handle form inputs and controlled components
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📊</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              Array Manipulation
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Add and remove items from arrays with state updates
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔄</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              State Updates
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Update complex state objects and arrays properly
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎯</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              Event Handling
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Handle form submissions and input changes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
