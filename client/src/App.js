import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginP from "./components/pages/LoginP";
import RegisterP from "./components/pages/RegisterP";
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import PostDetails from "./components/pages/PostDetails";


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={RegisterP} />
        <Route exact path="/login" component={LoginP} />
        <Route exact path="/contact-us" component={Contact}/>
        <Route exact path="/" component={Home}/>
        <Route exact path='/post/:id' component={PostDetails} />
        <Route exact path="/profile" component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;
