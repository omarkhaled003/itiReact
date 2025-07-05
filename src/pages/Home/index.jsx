import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const learningModules = [
    {
      title: "Day 1 - Counter",
      description:
        "Learn React state management with a simple counter component",
      path: "/counter",
      icon: "🔢",
      color: "primary",
    },
    {
      title: "Day 2 - Calculator",
      description: "Build a functional calculator with React components",
      path: "/calc",
      icon: "🧮",
      color: "secondary",
    },
    {
      title: "Day 3 - Posts",
      description: "Explore data handling and component composition",
      path: "/page",
      icon: "📝",
      color: "success",
    },
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <div className="card text-center mb-8">
        <h1 className="heading-1">Welcome to React Learning Hub</h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Explore React fundamentals through interactive examples and hands-on
          projects. Each day builds upon the previous, creating a comprehensive
          learning journey.
        </p>
      </div>

      {/* Learning Modules Grid */}
      <div className="grid grid-cols-3 gap-6">
        {learningModules.map((module, index) => (
          <div
            key={module.path}
            className="card hover-effect"
            style={{
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              {module.icon}
            </div>
            <h3 className="heading-3" style={{ marginBottom: "0.5rem" }}>
              {module.title}
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              {module.description}
            </p>
            <Link
              to={module.path}
              className={`btn btn-${module.color}`}
              style={{ textDecoration: "none" }}
            >
              Start Learning →
            </Link>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="card mt-8">
        <h2 className="heading-2 text-center mb-8">What You'll Learn</h2>
        <div className="grid grid-cols-2 gap-6">
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚛️</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              React Fundamentals
            </h4>
            <p style={{ color: "var(--text-secondary)" }}>
              Master components, props, state, and lifecycle methods
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎨</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              Modern UI/UX
            </h4>
            <p style={{ color: "var(--text-secondary)" }}>
              Create beautiful interfaces with modern CSS and animations
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔄</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              State Management
            </h4>
            <p style={{ color: "var(--text-secondary)" }}>
              Learn to manage application state effectively
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🚀</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              Best Practices
            </h4>
            <p style={{ color: "var(--text-secondary)" }}>
              Follow React best practices and modern development patterns
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start Guide */}
      <div
        className="card mt-8"
        style={{ background: "var(--gradient-primary)", color: "white" }}
      >
        <h2 className="heading-2 text-center mb-4" style={{ color: "white" }}>
          Ready to Get Started?
        </h2>
        <p style={{ textAlign: "center", fontSize: "1.1rem", opacity: 0.9 }}>
          Choose a module from above and begin your React learning journey
          today!
        </p>
      </div>
    </div>
  );
}
