import React from 'react';

// views
import TeaCatalogView from './TeaCatalogView';
import CartView from './CartView';
import AdminChatView from './AdminChatView';
import AuthView from './AuthView';

export default [
  { id: '1', path: '/tea-catalog', component: <TeaCatalogView /> },

  {
    id: '2',
    path: '/cart',
    component: <CartView />,
  },

  {
    id: '3',
    path: '/admin/chat',
    component: <AdminChatView />,
  },

  {
    id: '4',
    path: '/auth',
    component: <AuthView />,
  },
];
