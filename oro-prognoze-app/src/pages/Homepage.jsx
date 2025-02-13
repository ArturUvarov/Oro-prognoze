import { useState, useEffect } from "react";
import axios from "axios";
function Homepage() {
  const [miestai, setMiestai] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.meteo.lt/v1/")
      .then((response) => {
        setMiestai(response.data);
      })
      .catch((error) => {
        console.error("Blogai:", error);
      });
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Miestų sąrašas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {miestai.map((miestas) => (
          <div
            key={miestas.code}
            className="p-4 border rounded shadow hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">{miestas.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Homepage;
