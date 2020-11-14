import { lazy, React, Suspense, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Header } from './component/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './styles/App.scss';
import { CartContext } from './useContext/CartContext';
import { getSessionStorage } from './utils/sessionStorage';

const ProductDetails = lazy(() => import('./pages/ProductDetails'));

function App() {
  const { pathname } = useLocation();
  const [cart, setCart] = useState(() => (getSessionStorage('cart') ? parseInt(getSessionStorage('cart')) : 0));

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <Suspense fallback={<div>Loading...</div>}>
          {pathname !== '/404' && <Header />}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/detail/:mobileId' component={ProductDetails} />
            <Route exact path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>
        </Suspense>
      </CartContext.Provider>
    </div>
  );
}

export default App;
