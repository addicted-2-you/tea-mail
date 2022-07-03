import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

import { cart } from './graphql/client/reactive-vars';

import { getAccessToken } from './access-token';

import routes, { getNavRoutes } from './views/routes';

import ChatWidget from './widgets/chat-widget/ChatWidget';

const navRoutes = getNavRoutes();
const leftRoutes = navRoutes.slice(0, 5);
const rightRoutes = navRoutes.slice(5);

const renderNav = (nav) =>
  nav.map(({ id, path, label }) => (
    <li key={id} className="border-b-2 border-b-purple-600 hover:border-b-purple-900">
      <Link to={path}>{label}</Link>
    </li>
  ));

function App() {
  const navigate = useNavigate();

  // read cart from the localStorage
  React.useEffect(() => {
    const initCart = window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart'))
      : [];

    cart(initCart);
  }, []);

  // read access token from the localStorage
  React.useEffect(() => {
    const authToken = getAccessToken();
    if (!authToken) {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <div>
      <header className="px-4 py-2 flex justify-center items-center gap-x-3 bg-purple-200">
        <nav className="w-1/3 justify-end">
          <ul className="flex gap-x-2 justify-end">{renderNav(leftRoutes)}</ul>
        </nav>

        <a className="text-blue-600 hover:underline" href="/">
          Tea
        </a>

        <nav className="w-1/3 justify-start">
          <ul className="flex gap-x-2">{renderNav(rightRoutes)}</ul>
        </nav>
      </header>

      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.component} exact={route.exact} />
        ))}
      </Routes>

      <ChatWidget />
    </div>
  );
}

export default App;
