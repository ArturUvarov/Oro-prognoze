import PasirinktiMiestai from "./pages/PasirinktiMiestai";
import Miestai from "./pages/Miestai";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import Navigation from "./components/navbar/NavbarElements";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/pasirinkti-miestai" element={<PasirinktiMiestai />} />
          <Route path="/miestai" element={<Miestai />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
