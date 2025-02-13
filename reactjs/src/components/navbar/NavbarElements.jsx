import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/pasirinkti-miestai">Pasirinkti miestai</Link>
        </li>
        <li>
          <Link to="/miestai">Miestai</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
