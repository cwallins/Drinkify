import './App.css';
import Nav from './Nav'
import Search from './Search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import About from './About'

function App() {
  return (

    <Router>
      <div className="App">
        
        <Nav />
        <Search />

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;