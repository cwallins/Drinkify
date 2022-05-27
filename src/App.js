import './App.css';
import Nav from './Nav'
import Search from './Search'
import StoredDrinks from './StoredDrinks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import About from './About'
import Results from './Results';

function App() {
  return (

    <Router>
      <div className="App">
        
        <Nav />
        <Search>
          <Results />
        </Search>
          

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