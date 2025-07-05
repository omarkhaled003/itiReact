import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserInfoContext from "../../Context/User/UserInfoContext";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { setIsLogin, isLogin } = useContext(UserInfoContext);
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (formData.username === "omar" && formData.password === "123") {
      setIsLogin(true);
    } else {
      setError("Invalid username or password. Please try again.");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (isLogin) {
      nav("/");
    }
  }, [isLogin, nav]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className="card"
        style={{
          maxWidth: "400px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "100px",
            height: "100px",
            background: "var(--gradient-primary)",
            borderRadius: "50%",
            opacity: 0.1,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "60px",
            height: "60px",
            background: "var(--gradient-secondary)",
            borderRadius: "50%",
            opacity: 0.1,
          }}
        ></div>

        {/* Login Header */}
        <div className="text-center mb-8">
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔐</div>
          <h1 className="heading-2">Welcome Back</h1>
          <p style={{ color: "var(--text-secondary)" }}>
            Sign in to access your learning dashboard
          </p>
        </div>

        {/* Error Message */}
        {error && <div className="alert alert-danger mb-4">{error}</div>}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your username"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full ${
              isLoading ? "opacity-75" : ""
            }`}
            disabled={isLoading}
            style={{ width: "100%" }}
          >
            {isLoading ? (
              <>
                <div
                  className="spinner"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "0.5rem",
                  }}
                ></div>
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div
          className="mt-8 p-4"
          style={{
            background: "rgba(102, 126, 234, 0.1)",
            borderRadius: "var(--border-radius)",
            border: "1px solid rgba(102, 126, 234, 0.2)",
          }}
        >
          <h4
            style={{
              marginBottom: "0.5rem",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "var(--primary-color)",
            }}
          >
            Demo Credentials
          </h4>
          <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
            <div>
              <strong>Username:</strong> omar
            </div>
            <div>
              <strong>Password:</strong> 123
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
            This is a demo application for learning React fundamentals
          </p>
        </div>
      </div>
    </div>
  );
}
