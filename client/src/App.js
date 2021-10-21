import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginP from "./components/pages/LoginP";
import RegisterP from "./components/pages/RegisterP";
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import EnglishClass from "./components/pages/EnglishClass";
import FrenchClass from "./components/pages/FrenchClass";
import Outdoorgaming from "./components/pages/OutdoorGaming";
import LearningActivity from "./components/pages/LearningActivity";
import Events from "./components/pages/Events";
import Staffs from "./components/pages/Staffs";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
          <Navbar />

      <Switch>
        <Route exact path="/login" component={LoginP} />
        <Route exact path="/register" component={RegisterP} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/ourstaffs" component={Staffs} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/englishclass" component={EnglishClass} />
        <Route exact path="/frenchclass" component={FrenchClass} />
        <Route exact path="/outdoorgaming" component={Outdoorgaming} />
        <Route exact path="/learningactivity" component={LearningActivity} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
