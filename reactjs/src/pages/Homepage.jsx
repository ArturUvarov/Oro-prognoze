import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="homepage" style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ marginBottom: "2rem" }}>Oro Prognozė</h1>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p style={{ marginBottom: "1.5rem" }}>
          Sveiki atvykę į oro prognozės puslapį! Čia galite:
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <Link
              to="/miestai"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Peržiūrėti visus miestus
            </Link>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <Link
              to="/pasirinkti-miestai"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Pasirinkti mėgstamus miestus
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Homepage;
