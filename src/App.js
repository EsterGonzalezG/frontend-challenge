import { lazy, React, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
//import { ProductDetails } from './pages/ProductDetails';
import './styles/App.scss';
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/detail/:mobileId' component={ProductDetails} />
        </Suspense>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
