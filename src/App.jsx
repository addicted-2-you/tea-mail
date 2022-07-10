import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

import { cart } from './graphql/client/reactive-vars';

import { getAccessToken } from './access-token';

import routes, { getNavRoutes } from './views/routes';

import ChatWidget from './widgets/chat-widget/ChatWidget';

// icons
import CartIcon from './assets/img/cart.svg';

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
    <>
      <header className="relative px-4 py-2 flex justify-center items-center gap-x-3 bg-purple-200">
        <nav className="w-1/3 justify-end">
          <ul className="flex gap-x-2 justify-end">{renderNav(leftRoutes)}</ul>
        </nav>

        <Link to="/">Tea</Link>

        <nav className="w-1/3 justify-start">
          <ul className="flex gap-x-2">{renderNav(rightRoutes)}</ul>
        </nav>

        <div className="absolute right-2 flex justify-between items-center">
          <Link className="opacity-75 hover:opacity-100" to="/cart">
            <img width="22" src={CartIcon} alt="cart icon" />
          </Link>
        </div>
      </header>

      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.component} exact={route.exact} />
        ))}
      </Routes>

      <ChatWidget />
    </>
  );
}

export default App;
