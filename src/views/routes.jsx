import React from 'react';

// views
import MainView from './MainView';
import TeaCatalogView from './TeaCatalogView';
import CartView from './CartView';
import AdminChatView from './AdminChatView';
import AuthView from './AuthView';

const routes = [
  {
    id: '0',
    path: '/',
    component: <MainView />,
  },

  {
    id: '1',
    path: '/tea-catalog',
    label: 'Каталог',
    showInNav: true,
    component: <TeaCatalogView />,
  },

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

  {
    id: '5',
    path: '/tea-room',
    label: 'Чайная',
    showInNav: true,
    component: null,
  },

  {
    id: '6',
    path: '/delivery',
    label: 'Доставка',
    showInNav: true,
    component: null,
  },

  {
    id: '7',
    path: '/promotions',
    label: 'Акции',
    showInNav: true,
    component: null,
  },

  {
    id: '8',
    path: '/about/tea',
    label: 'О чае',
    showInNav: true,
    component: null,
  },

  {
    id: '9',
    path: '/about/team',
    label: 'О нас',
    showInNav: true,
    component: null,
  },

  {
    id: '10',
    path: '/wholesale',
    label: 'Чай оптом',
    showInNav: true,
    component: null,
  },

  {
    id: '11',
    path: '/about/contacts',
    label: 'Контакты',
    showInNav: true,
    component: null,
  },

  {
    id: '12',
    path: '/reviews',
    label: 'Отзывы',
    showInNav: true,
    component: null,
  },
];

export default routes;

export const getNavRoutes = () => routes.filter((route) => route.showInNav);
