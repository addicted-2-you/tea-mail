import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

import { cart, userProfile } from './graphql/client/reactive-vars';
import { GET_USER_PROFILE } from './graphql/client/queries/users-queries';

import { getAccessToken } from './access-token';

import routes, { getNavRoutes } from './views/routes';

import ChatWidget from './widgets/chat-widget/ChatWidget';

// icons
import CartIcon from './assets/img/cart.svg';
import UserIcon from './assets/img/user-solid.svg';

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

  const [getUserProfile] = useLazyQuery(GET_USER_PROFILE);

  // read access token from the localStorage
  React.useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const accessToken = getAccessToken();
        if (accessToken) {
          const response = await getUserProfile({ variables: { accessToken } });
          if (response.data.userProfile) {
            console.log('profile', response.data.userProfile);
            userProfile(response.data.userProfile);
            return;
          }
        }

        navigate('/auth');
      } catch (err) {
        console.error(err);
        navigate('/auth');
      }
    };

    asyncWrapper();
  }, [navigate]);

  // read cart from the localStorage
  React.useEffect(() => {
    const initCart = window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart'))
      : [];

    cart(initCart);
  }, []);

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

        <div className="absolute right-2 flex justify-between items-center space-x-4  ">
          <Link className="opacity-75 hover:opacity-100" to="/cart">
            <img width="22" src={CartIcon} alt="cart" />
          </Link>

          {userProfile ? (
            <Link className="opacity-75 hover:opacity-100" to="/profile">
              <img width="16" src={UserIcon} alt="user" />
            </Link>
          ) : null}
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
