import './App.css';
import Home from './pages/Home';
import BusinessDetailsForm from './pages/BusinessDetails';
import PaymentMethod from './pages/PaymentMethod';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/details' component={BusinessDetailsForm} />
        <Route exact path='/payment' component={PaymentMethod} />
      </Switch>
    </Router>
  );
}

export default App;
