import { lazy, React, Suspense, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './styles/App.scss';
import { CartContext } from './useContext/CartContext';
import { getSessionStorage } from './utils/sessionStorage';

const ProductDetails = lazy(() => import('./pages/ProductDetails'));

function App() {
  const [cart, setCart] = useState(() => (getSessionStorage('cart') ? parseInt(getSessionStorage('cart')) : 0));

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/detail/:mobileId' component={ProductDetails} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </CartContext.Provider>
    </div>
  );
}

export default App;
