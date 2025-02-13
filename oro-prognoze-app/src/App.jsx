import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fetch from "./Fetch";
import PasirinktiMiestai from "./pages/PasirinktiMiestai";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FetchMiestai from "./FetchMiestai";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Fetch />} />
          <Route path="/pasirinkti-miestai" element={<PasirinktiMiestai />} />
          <Route path="/miestai" element={<FetchMiestai />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
