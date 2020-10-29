import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import './styles/App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/detail/:mobileId' component={ProductDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
