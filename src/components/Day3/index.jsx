import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Posts() {
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState([]);

  const getData = async function getData(url) {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setData(data);
    } catch ({ message }) {
      console.log(message);
      setIsError(message);
    }
    setIsloading(false);
  };

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/posts");
  }, []);

  return (
    <div className="fade-in">
      {/* Header Section */}
      <div className="card text-center mb-8">
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
        <h1 className="heading-1">Blog Posts</h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Learn React data fetching and component rendering with real API data.
          Explore how to handle loading states, errors, and dynamic content.
        </p>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="card text-center" style={{ padding: "4rem 2rem" }}>
          <div className="spinner" style={{ margin: "0 auto 1rem" }}></div>
          <h3 style={{ marginBottom: "0.5rem" }}>Loading Posts...</h3>
          <p style={{ color: "var(--text-secondary)" }}>
            Fetching data from the API
          </p>
        </div>
      )}

      {/* Error State */}
      {!isLoading && isError && (
        <div
          className="card text-center"
          style={{
            padding: "4rem 2rem",
            background: "var(--gradient-secondary)",
            color: "white",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚠️</div>
          <h3 style={{ marginBottom: "0.5rem", color: "white" }}>
            Error Loading Posts
          </h3>
          <p style={{ opacity: 0.9 }}>{isError}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary mt-4"
          >
            <span style={{ marginRight: "0.5rem" }}>🔄</span>
            Try Again
          </button>
        </div>
      )}

      {/* Posts List */}
      {!isLoading && !isError && (
        <div className="card">
          <h3 className="heading-3 text-center mb-6">Latest Posts</h3>
          <div className="grid grid-cols-1 gap-4">
            {Children.toArray(
              data.slice(0, 10).map(({ title, id, body }) => (
                <div
                  className="card"
                  style={{
                    padding: "1.5rem",
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    to={`/post-details/${id}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "2rem",
                          opacity: 0.7,
                          flexShrink: 0,
                        }}
                      >
                        📄
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            marginBottom: "0.5rem",
                            fontWeight: "600",
                            color: "var(--text-primary)",
                            fontSize: "1.1rem",
                          }}
                        >
                          {title}
                        </h4>
                        <p
                          style={{
                            color: "var(--text-secondary)",
                            fontSize: "0.9rem",
                            lineHeight: "1.5",
                            marginBottom: "1rem",
                          }}
                        >
                          {body.length > 100
                            ? `${body.substring(0, 100)}...`
                            : body}
                        </p>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--primary-color)",
                            fontWeight: "500",
                          }}
                        >
                          Read More →
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Learning Concepts */}
      <div className="card mt-8">
        <h3 className="heading-3 text-center mb-6">Learning Concepts</h3>
        <div className="grid grid-cols-2 gap-6">
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🌐</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              API Integration
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Fetch data from external APIs using axios
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⏳</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              Loading States
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Handle loading and error states gracefully
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔗</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              React Router
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Navigate between pages with dynamic routing
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📱</div>
            <h4 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              Responsive Design
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Create responsive layouts that work on all devices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
