import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className="bg-cyan-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center">
          <ul className="flex items-center justify-center space-x-8 py-4">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 inline-block" /* Added inline-block */
              >
                Homepage
              </Link>
            </li>
            <li>
              <Link
                to="/pasirinkti-miestai"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 inline-block"
              >
                Pasirinkti miestai
              </Link>
            </li>
            <li>
              <Link
                to="/miestai"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 inline-block"
              >
                Miestai
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
