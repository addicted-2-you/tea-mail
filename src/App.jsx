import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { getAccessToken } from './access-token';

import { cart } from './graphql/client/reactive-vars';

import routes from './views/routes';

import ChatWidget from './widgets/chat-widget/ChatWidget';

function App() {
  const navigate = useNavigate();

  // read cart from the localStorage
  React.useEffect(() => {
    const initCart = window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart'))
      : [];

    cart(initCart);
  }, []);

  React.useEffect(() => {
    const authToken = getAccessToken();
    if (!authToken) {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <div>
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
