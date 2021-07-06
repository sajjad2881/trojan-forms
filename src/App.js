import './App.css';
import Home from './pages/Home';
import BusinessDetailsForm from './pages/BusinessDetails';
import Unregistered from './pages/Unregistered';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/details' component={BusinessDetailsForm} />
        <Route exact path='/unregistered' component={Unregistered} />
      </Switch>
    </Router>
  );
}

export default App;
