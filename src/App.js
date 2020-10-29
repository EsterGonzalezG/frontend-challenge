import './styles/App.scss';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { NotFound } from './pages/NotFound';
import { Header } from './component/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/detail/:mobileId' component={ProductDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
