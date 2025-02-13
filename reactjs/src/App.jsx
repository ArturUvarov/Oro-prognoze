import PasirinktiMiestai from "./pages/PasirinktiMiestai";
import Miestai from "./pages/Miestai";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route path="/pasirinkti-miestai">
            <PasirinktiMiestai />
          </Route>
          <Route path="/miestai">
            <Miestai />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}
export default App;
