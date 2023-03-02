import "./App.css";
import Search from "./Search";
import StoredDrinks from "./StoredDrinks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <Search />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/mydrinks">
            <StoredDrinks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
