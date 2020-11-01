import { lazy, React, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './styles/App.scss';
const ProductDetails = lazy(() => import('./pages/ProductDetails'));

function App() {
  return (
    <div>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:mobileId' component={ProductDetails} />
          <Route component={NotFound} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
