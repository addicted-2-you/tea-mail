import React from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from './views/routes';

function App() {
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
