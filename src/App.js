import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/checkout'>
          <Header></Header>
          <h1>I am a CHECKOUT, SMASH THE LIKE BUTTON</h1>
          </Route>
          <Route path='/'>

      <Header></Header>
      <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
