import { useState, useEffect } from "react";
const FetchMiestai = () => {
  const [miestas, setMiestas] = useState([]);
  useEffect(() => {
    fetch("https://meteoapi.vercel.app/v1/places/")
      .then((res) => {
        return res.json();
      })
      .then((duomenis) => {
        setMiestas(duomenis);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Visu miestų sąrašas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {miestas.map((duomenis) => (
          <div
            key={duomenis.name}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <h2 className="text-lg font-semibold text-center">
              {duomenis.code}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FetchMiestai;
