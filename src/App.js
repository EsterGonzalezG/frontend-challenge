import { lazy, React, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './styles/App.scss';
const ProductDetails = lazy(() => import('./pages/ProductDetails'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:mobileId' component={ProductDetails} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
