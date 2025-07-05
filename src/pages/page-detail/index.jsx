import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PageDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async function getData(url) {
    try {
      setIsLoading(true);
      setError("");
      const { data } = await axios.get(url);
      setData(data);
    } catch (err) {
      setError(err.message || "Failed to load post");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }, [id]);

  return (
    <div
      className="fade-in"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <div style={{ width: "100%", maxWidth: 700 }}>
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            to="/page"
            className="btn btn-secondary"
            style={{ textDecoration: "none" }}
          >
            <span style={{ marginRight: "0.5rem" }}>←</span>
            Back to Posts
          </Link>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="card text-center" style={{ padding: "4rem 2rem" }}>
            <div className="spinner" style={{ margin: "0 auto 1rem" }}></div>
            <h3 style={{ marginBottom: "0.5rem" }}>Loading Post...</h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Fetching post details from the API
            </p>
          </div>
        )}

        {/* Error State */}
        {!isLoading && error && (
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
              Error Loading Post
            </h3>
            <p style={{ opacity: 0.9, marginBottom: "1rem" }}>{error}</p>
            <button
              onClick={() =>
                getData(`https://jsonplaceholder.typicode.com/posts/${id}`)
              }
              className="btn btn-primary"
            >
              <span style={{ marginRight: "0.5rem" }}>🔄</span>
              Try Again
            </button>
          </div>
        )}

        {/* Post Content */}
        {!isLoading && !error && data && (
          <div
            className="card"
            style={{
              boxShadow: "0 8px 32px rgba(102,126,234,0.15)",
              padding: "2.5rem 2rem",
              borderRadius: 20,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📄</div>
              <div
                style={{
                  display: "inline-block",
                  background: "var(--gradient-primary)",
                  color: "white",
                  padding: "0.4rem 1.2rem",
                  borderRadius: "999px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  letterSpacing: "0.5px",
                  boxShadow: "0 2px 8px rgba(102,126,234,0.10)",
                }}
              >
                Post ID: {data.id}
              </div>
            </div>
            <h2
              className="heading-2"
              style={{ marginBottom: "1.5rem", textAlign: "center" }}
            >
              {data.title}
            </h2>
            <div
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.8",
                color: "var(--text-primary)",
                background: "rgba(102,126,234,0.07)",
                borderRadius: "12px",
                padding: "1.5rem",
                marginBottom: "2rem",
                fontWeight: 500,
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(102,126,234,0.05)",
              }}
            >
              {data.body}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <div className="grid grid-cols-3 gap-4">
                <button className="btn btn-primary">
                  <span style={{ marginRight: "0.5rem" }}>👍</span>
                  Like
                </button>
                <button className="btn btn-secondary">
                  <span style={{ marginRight: "0.5rem" }}>💬</span>
                  Comment
                </button>
                <button className="btn btn-success">
                  <span style={{ marginRight: "0.5rem" }}>📤</span>
                  Share
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
