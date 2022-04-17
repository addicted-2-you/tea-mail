import React from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from './views/routes';

function App() {
  return (
    <>
      <header className="flex justify-center items-center">
        <h1 className="text-xl font-bold">Hello TeaMail</h1>
      </header>

      <div>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} exact={route.exact} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
