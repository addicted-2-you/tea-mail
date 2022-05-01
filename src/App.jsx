import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { cart } from './graphql/client/reactive-vars';

import routes from './views/routes';

function App() {
  // read cart from the localStorage
  React.useEffect(() => {
    const initCart = window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart'))
      : [];

    cart(initCart);
  }, []);

  return (
    <div>
      <h1>Hello TeaMail</h1>

      <div>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} exact={route.exact} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
