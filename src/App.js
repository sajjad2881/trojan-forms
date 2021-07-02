import './App.css';
import Home from './pages/Home';
import BusinessDetailsForm from './pages/BusinessDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/details' component={BusinessDetailsForm} />
      </Switch>
    </Router>
  );
}

export default App;
