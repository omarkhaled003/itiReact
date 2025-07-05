import { Outlet, Link, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/counter", label: "Day 1 - Counter", icon: "🔢" },
    { path: "/calc", label: "Day 2 - Calculator", icon: "🧮" },
    { path: "/page", label: "Day 3 - Posts", icon: "📝" },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Beautiful Navigation Header */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">React Learning Hub</div>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  <span style={{ marginRight: "0.5rem" }}>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main
        className="container"
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="fade-in" style={{ width: "100%", maxWidth: "1200px" }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
